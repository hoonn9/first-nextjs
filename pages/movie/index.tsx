import axios from "axios";
import { GetStaticProps } from "next";
import { VFC } from "react";
import { Movie, MoviesResponse, YifyResponse } from "../../types/yts.types";

interface Props {
  movies: ReadonlyArray<Movie>;
}

const Movie: VFC<Props> = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => {
        return <li key={movie.id}>{movie.title}</li>;
      })}
    </ul>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get<YifyResponse<MoviesResponse>>(
    "https://yts.mx/api/v2/list_movies.json"
  );
  const movies = data.data.movies;

  return {
    props: {
      movies: movies,
    },
  };
};

export default Movie;
