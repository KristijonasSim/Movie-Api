import React from 'react'
import { Box } from '@mui/system'
import styled from '@emotion/styled'
import { TextField, Button, Link } from '@mui/material'

const EmailInputCard = () => {


const StyledTextField = styled(TextField)`
    background-color: #fff;
    border-radius: 4px;
    width: 70%;
    color:blue;
    height: 60px;
    border-radius:0;
`
const StyledButton = styled(Button)`
    border-radius: 0;
    border-left: 1px solid #333;
    border-top-left-radius: 0;
    margin: 0!important;
    font-size: 1.5rem;
    min-height: 40px;
    width:30%;
    background-color: #E10813;
    color:#fff;
    text-transform: capitalize;
`

  return (
          <Box component='form' sx={{width:'100%', display:'flex',justifyContent:'center',}}>
              <StyledTextField
              sx={{ input: { color: 'black', marginLeft:'20px', marginBottom:'10px'}}}
              InputLabelProps={{
                    style: { color: '#8C8C8C', marginLeft: '24px', },
              }}
              id="email"
              name="email"
              label="Email adress"
              type="email"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              />
                <StyledButton href='register'>Get Started</StyledButton>
            </Box>

  )
}

export default EmailInputCard