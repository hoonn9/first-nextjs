import { Button, createStandaloneToast } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { useState, VFC } from "react";
import PaginationButton from "../../components/pagination/pagination-button";
import { apiClient } from "../../core/api/client";
import { handleError } from "../../core/error/handler";
import { Movie, MoviesResponse, YifyResponse } from "../../types/yts.types";

const toast = createStandaloneToast();

interface Props {
  movies: ReadonlyArray<Movie>;
}

const Movie: VFC<Props> = ({ movies }) => {
  const [page, setPage] = useState(1);

  return (
    <div>
      <ul>
        {movies.map((movie) => {
          return <li key={movie.id}>{movie.title}</li>;
        })}
      </ul>
      <PaginationButton setPage={setPage} />
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   console.log("context", query);
//   // const [page, setPage] = useState(1);

//   const { data } = await axios.get<YifyResponse<MoviesResponse>>("https://yts.mx/api/v2/list_movies.json", {
//     params: {
//       page: query.page,
//     },
//   });
//   const movies = data.data.movies;

//   return {
//     props: {
//       movies: movies,
//     },
//   };
// };

// 페이지를 렌더링하는 데 필요한 데이터는 사용자의 요청에 앞서 빌드 시 사용
export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { data } = await apiClient<YifyResponse<MoviesResponse>>({
      method: "get",
      url: "/v2/list_movies.jsn",
      params: {
        page: 1,
      },
    });

    const movies = data.data.movies;

    return {
      props: {
        movies: movies,
      },
    };
  } catch (error) {
    handleError(error);

    // Not Found render
    // return {
    //   notFound: true,
    // };

    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default Movie;
