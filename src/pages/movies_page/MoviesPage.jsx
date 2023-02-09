import React from "react";
import { Box } from "@mui/system";
import { userApi } from "../../components/api/userApi";
import { useState } from "react";
import { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import Slider from "../../components/slider/slider";


const MoviesPage = () => {
  const [moviesd, setMoviesd] = useState([]);
  
  console.log(moviesd)
  useEffect(() => {
    getTrendingMovies();
  }, []);
  const getTrendingMovies = async () => {
    try {
      const response = await userApi.getTrendingMovies();
      setMoviesd(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box>
      <Box sx={{ color: "#fff", height: "60vh", backgroundColor:'red' }}>

    </Box>
      <Slider moviesArray={moviesd}/>
    </Box>
  );
};

export default MoviesPage;




