import React from "react";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import { Typography, Button } from "@mui/material";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { css, keyframes } from "@emotion/react";




const timeOut = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;


const MovieDetails = ({ selectedMovie }) => {

    const StyledMainContainer = styled(Box)`
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      animation: ${timeOut} 2s ease;
    `;

  const StyledImage = styled(Box)`
    object-fit: cover;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
        90deg,
        rgba(24, 22, 22, 0.773546918767507) 37%,
        rgba(249, 248, 243, 0) 58%
      ),
      url("https://upload.wikimedia.org/wikipedia/en/f/f4/Netflix_-_English.jpg");
  `;

  const StyledPlayButton = styled(Button)`
    color: black;
    background-color: #fff;
    padding: 7px 22px;
    margin: 20px;
    &:hover {
      color: #fff;
      background-color: grey;
      transition: 0.8s ease-in-out;
    }
  `;

  const StyledListButton = styled(Button)`
    color: #fff;
    background-color: grey;
    padding: 7px 22px;
    &:hover {
      color: black;
      background-color: #fff;
      transition: 0.8s ease-in-out;
    }
  `;

  const baseURL = "https://image.tmdb.org/t/p/original";

  return (
    <StyledMainContainer
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ width: "100%", position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: "25%",
            color: "#fff",
            zIndex: 20,
            width: "35%",
            height: "50%",
            ml: 5,
          }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              mr: 10,
              fontFamily: "Helvetica Neue",
              textTransform: "uppercase",
            }}
          >
            {selectedMovie.title}
            {selectedMovie.name}
          </Typography>
          <StyledPlayButton>
            <PlayArrowSharpIcon /> Play
          </StyledPlayButton>
          <StyledListButton>
            <AddSharpIcon /> My List
          </StyledListButton>

          <Typography variant="h6" sx={{ color: "grey", transition: "all 2s" }}>
            {selectedMovie.overview}
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            background:
              "linear-gradient(70deg, rgba(1,1,1,1) 14%, rgba(255,255,255,0) 84%)",
            zIndex: 1,
          }}
        />
        <StyledImage
          component="img"
          src={baseURL + selectedMovie.backdrop_path}
        />
      </Box>
    </StyledMainContainer>
  );
};

export default MovieDetails;

