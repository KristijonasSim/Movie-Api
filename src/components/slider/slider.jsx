import React from "react";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import Carousel from "react-elastic-carousel";
import { Typography } from "@mui/material";

  const StyledContainer = styled(Box)`
    transition: all 5s;
  `;

  const StyledImageContainer = styled(Box)`
    max-height: 160px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const StyledImage = styled(Box)`
    height: 100%;
    width: auto;
    object-fit: cover;
    transition: transform 0.5s;
    &:hover {
      transform: scale(1.45);
      cursor: pointer;
    }
  `;

  const StyledCarousel = styled(Carousel)`
    .kXteup {
      color: #fff;
      box-shadow: none;
      background-color: transparent;
      font-size: 2.5rem;
    }
    .kXteup:hover,
    hover {
      background-color: transparent;
      box-shadow: none;
    }
  `;

const Slider = ({ trendingMovies, onMovieSelected }) => {
  const handleClick = (singleMovie) => {
    onMovieSelected(singleMovie);
  };

  const breakPoints = [
    { width: 1300, itemsToShow: 3 },
    { width: 1400, itemsToShow: 4 },
    { width: 1500, itemsToShow: 5 },
    { width: 1600, itemsToShow: 6 },
  ];

  const baseURL = "https://image.tmdb.org/t/p/original";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#141414",
      }}
    >
      <Typography variant="h4" sx={{ color: "#fff", marginLeft: "4rem" }}>
        Trending now
      </Typography>
      <StyledCarousel
        breakPoints={breakPoints}
        pagination={false}
        disableArrowsOnEnd={false}
        transitionMs={500}
      >
        {trendingMovies.map((item) => (
          <StyledContainer key={item.id} onMouseEnter={() => handleClick(item)}>
            <StyledImageContainer
              key={item.id}
              sx={{ height: "200px", width: "auto" }}
            >
              <StyledImage component="img" src={baseURL + item.backdrop_path} />
            </StyledImageContainer>
          </StyledContainer>
        ))}
      </StyledCarousel>
    </Box>
  );
};

export default Slider;
