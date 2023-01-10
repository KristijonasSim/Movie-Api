import React from 'react'
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import {Link} from '@mui/material';
import { ReactComponent as Netflix } from './netflix.svg';

const Navbar = () => {

const StyledNavbarBox = styled(Box)`
  width:100vw;
  height:90px;
  background-color: rgba(0,0,0,0.4);
  color: #fff;
  display:flex;
  align-items:center;
  position: fixed;
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
  padding: 7px 15px;
  background-color: #E50914;
  &:hover {color: #C1C1C1; transition: 0.7s ease-in-out}
`
  return (
    <StyledNavbarBox>
      <Link href="main-page"><Netflix/></Link>
      <StyledSignButtonBox>
        <Link href="login" sx={{textDecoration:'none'}}>
        <StyledSignButton>Sign in</StyledSignButton>
        </Link>  
      </StyledSignButtonBox>
    </StyledNavbarBox>
  )
}

export default Navbar