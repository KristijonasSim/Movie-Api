import React from 'react'
import { Box } from '@mui/system'
import styled from '@emotion/styled'
import { Typography, TextField, Button,  } from '@mui/material'
import netflixImg from '../../../src/components/assets/netflix.jpg'
import AcordionCard from '../../components/cards/acordion_card/acordion_card'

const StyledInputBox = styled(Box)`
    margin: 0 auto;
    height:100%;
    max-width:750px;
    text-align:center;
    font-weight:900;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    color: #fff;

`
const StyledTextField = styled(TextField)`
    background-color: #fff;
    border-radius: 4px;
    width: 70%;
    color:blue;
    height: 60px;
`
const StyledButton = styled(Button)`
    border-bottom-left-radius: 0;
    border-left: 1px solid #333;
    border-top-left-radius: 0;
    margin: 0!important;
    font-size: 1.5rem;
    min-height: 40px;
    width:30%;
    background-color: #E10813;
    color:#fff;
    text-transform: capitalize;
    &:hover {background-color: #fc0303}
`
const StyledHeroSection = styled(Box)`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.9)) , url(${netflixImg});
    background-size: cover;
    height: 80vh;
    border-bottom: 8px solid #222;
`
const StyledStoryCard = styled(Box)`
    background-color: black;
    padding: 70px 45px;
    background: transparent;
    border-bottom: 8px solid #222;
    color: #fff;
    padding: 50px 5%;
    position: relative;
`
const StyledStoryCardContent = styled(Box)`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1400px;
    
`

const StyledStoryCardText = styled(Box)`
    flex: 0 1 auto;
    height: 100%;
    padding: 0 3rem 0 0;
    width: 50%;
    z-index: 3;
`

const StyledStoryCardAnimation = styled(Box)`
    display: flex;
    width: 40%;
    position:relative;
    display: flex;
    flex-direction:column;
`

const MainPage = () => {


  return (
    <Box>
      <StyledHeroSection>
        <StyledInputBox>
          <Typography variant='h2' sx={{margin: '1rem'}}>Unlimited movies, TV shows, and more.</Typography>
          <Typography variant='h4' sx={{margin: '1rem'}}>Watch anywhere. Cancel anytime.</Typography>
          <Typography variant='h6' sx={{margin: '1rem'}}>Ready to watch? Enter your email to create or restart your membership.</Typography>
          <Box component='form' sx={{width:'100%', display:'flex',padding: '10px 10px 0'}}>
            <StyledTextField
            sx={{ input: { color: 'black', marginLeft:'20px', marginBottom:'10px'}}}
            InputLabelProps={{
                  style: { color: '#8C8C8C', marginLeft: '24px' },
            }}
            id="email"
            name="email"
            label="Email adress"
            type="email"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            />
            <StyledButton>Get Started</StyledButton>
          </Box>
        </StyledInputBox>
    </StyledHeroSection>

    <StyledStoryCard>
      <StyledStoryCardContent>
          <StyledStoryCardText>
            <Typography variant='h2' sx={{mb:2}}>Enjoy on your TV.</Typography>
            <Typography variant='h4'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</Typography>
          </StyledStoryCardText>
          <StyledStoryCardAnimation>
            <Box sx={{zIndex:'1'}}>
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"/>
            </Box>
            <Box sx={{position:'absolute', top:'20%',  left:'85px'}}>
              <video autoPlay="autoplay" playsInline muted loop>
                <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v' type="video/mp4" />
              </video>
              </Box>
          </StyledStoryCardAnimation>
      </StyledStoryCardContent>
    </StyledStoryCard>

    <StyledStoryCard>
      <StyledStoryCardContent>
          <StyledStoryCardText>
            <Box>
              <img height='400px' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"/>
            </Box>
          </StyledStoryCardText>
          <StyledStoryCardAnimation >
            <Typography variant='h3' sx={{mb:2}}>Download your shows to watch offline.</Typography>
            <Typography variant='h4'>Save your favorites easily and always have something to watch.</Typography>
          </StyledStoryCardAnimation>
      </StyledStoryCardContent>
    </StyledStoryCard>


    <StyledStoryCard>
      <StyledStoryCardContent>
          <StyledStoryCardText>
            <Typography variant='h2' sx={{mb:2}}>Watch everywhere.</Typography>
            <Typography variant='h4'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</Typography>
          </StyledStoryCardText>
          <StyledStoryCardAnimation>
            <Box sx={{zIndex:'1'}}>
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"/>
            </Box>
            <Box sx={{position:'absolute', top:'11%',  left:'110px'}}>
              <video autoPlay="autoplay" playsInline muted loop height='235'>
                <source  src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v' type="video/mp4" />
              </video>
              </Box>
          </StyledStoryCardAnimation>
      </StyledStoryCardContent>
    </StyledStoryCard>

    <StyledStoryCard>
      <StyledStoryCardContent>
          <StyledStoryCardText>
            <Box>
              <img height='400px' src="https://occ-0-7397-1500.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"/>
            </Box>
          </StyledStoryCardText>
          <StyledStoryCardAnimation >
            <Typography variant='h3' sx={{mb:2}}>Create profiles for kids.</Typography>
            <Typography variant='h4'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</Typography>
          </StyledStoryCardAnimation>
      </StyledStoryCardContent>
    </StyledStoryCard>

  <StyledStoryCard>
      <AcordionCard/>
  </StyledStoryCard>


  </Box>
  )
}

export default MainPage