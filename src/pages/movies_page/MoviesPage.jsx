import React from "react";
import { Box } from "@mui/system";
import { userApi } from "../../components/api/userApi";
import { useState } from "react";
import { useEffect } from "react";
import Slider from "../../components/slider/slider";
import MovieDetails from "../../components/movie_details/MovieDetails";

const MoviesPage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);
  console.log(trendingMovies)
  useEffect(() => {
    userApi
      .getTrendingMovies()
      .then((data) => setTrendingMovies(data.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box>
      <Box sx={{ color: "#fff", height: "80vh", backgroundColor: "black"}}>
        <MovieDetails selectedMovie={selectedMovie} />
      </Box>
      <Slider
        trendingMovies={trendingMovies}
        onMovieSelected={(selectedMovie) => setSelectedMovie(selectedMovie)}
      />
    </Box>
  );
};

export default MoviesPage;
