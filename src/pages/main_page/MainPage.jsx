import React from 'react'
import { Box } from '@mui/system'
import styled from '@emotion/styled'
import { Typography, TextField, Button, Divider } from '@mui/material'
import netflixImg from '../../../src/components/assets/netflix.jpg'

const StyledInputBox = styled(Box)`
    margin: 0 auto;
    height:100vh;
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
    height: 80vh
`

const MainPage = () => {
  return (
    <Box>
      <StyledHeroSection>
        <StyledInputBox>
          <Typography variant='h2' sx={{margin: '1rem auto'}}>Unlimited movies, TV shows, and more.</Typography>
          <Typography variant='h4' sx={{margin: '1rem auto'}}>Watch anywhere. Cancel anytime.</Typography>
          <Typography variant='h6' sx={{margin: '1rem auto'}}>Ready to watch? Enter your email to create or restart your membership.</Typography>
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
  </Box>
  )
}

export default MainPage