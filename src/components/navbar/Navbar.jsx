import React from 'react'
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import LoginPage from '../../pages/login_page/LoginPage';
import {Link} from '@mui/material';


const Navbar = () => {

const StyledNavbarBox = styled(Box)`
  width:100vw;
  height:90px;
  background-color: #121212;
  color: #fff;
  display:flex;
  align-items:center;
`

const StyledSignButtonBox = styled(Box)`
  width:100%;
  display:flex;
  justify-content: flex-end;
  align-items:center;
  margin-right: 40px;
`

const StyledSignButton = styled(Button)`
  font-size: 1.10rem;
  color:#fff;
  height:10%;
  text-decoration:none;
  padding: 7px 15px;
  background-color: #E50914;
  &:hover {color: #C1C1C1; transition: 0.7s ease-in-out}
`
  return (
    <StyledNavbarBox>
      <StyledSignButtonBox>
        <Link href="login">
        <StyledSignButton>Sign in</StyledSignButton>
        </Link>  
      </StyledSignButtonBox>
    </StyledNavbarBox>
  )
}

export default Navbar