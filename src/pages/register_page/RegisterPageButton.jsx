import React from 'react'
import { Box, Button, styled } from '@mui/material'


const RegisterPageButton = () => {


const StyledButton = styled(Button)`
    border-left: 1px solid #333;
    border-top-left-radius: 0;
    margin: 0!important;
    font-size: 1.5rem;
    min-height: 40px;
    width:27%;
    background-color: #E10813;
    color:#fff;
    text-transform: capitalize;
    text-align: right;
    &:hover {
      background-color: red;
  }
`


  return (
    <Box sx={{textAlign:'right', m:'2rem'}}>
      <StyledButton type='submit'>Submit</StyledButton>
    </Box>
  )
}

export default RegisterPageButton