import axios from "axios";
import { GetServerSideProps, GetStaticProps } from "next";
import { Dispatch, SetStateAction, useState, VFC } from "react";
import PaginationButton from "../../components/pagination/pagination-button";
import { Movie, MoviesResponse, YifyResponse } from "../../types/yts.types";

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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  console.log("context", query);
  // const [page, setPage] = useState(1);

  const { data } = await axios.get<YifyResponse<MoviesResponse>>(
    "https://yts.mx/api/v2/list_movies.json",
    {
      params: {
        page: query.page,
      },
    }
  );
  const movies = data.data.movies;

  return {
    props: {
      movies: movies,
    },
  };
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   console.log("context", context);
//   // const [page, setPage] = useState(1);

//   const { data } = await axios.get<YifyResponse<MoviesResponse>>(
//     "https://yts.mx/api/v2/list_movies.json",
//     {
//       params: {
//         page: 1,
//       },
//     }
//   );
//   const movies = data.data.movies;

//   return {
//     props: {
//       movies: movies,
//     },
//   };
// };

export default Movie;
