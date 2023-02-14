import React from 'react'
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import {Link} from '@mui/material';
import { ReactComponent as Netflix } from './netflix.svg';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import UseLogout from '../hooks/useLogout';


const StyledNavbarBox = styled(Box)`
  width: 100%;
  z-index: 10;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  height:5rem;
`;

const StyledNavbarInnerContainer = styled(Box)`
  align-items: center;
  display: flex; 
  height: auto; 
  justify-content: space-between; 
  width: 95%;
  margin-right:0 4rem;
`

const StyledSignButton = styled(Button)`
  font-size: 1rem;
  font-weight: 500;
  color:#fff;
  padding: 2px 17px;
  background-color: #e50914;
  border-radius: 3px;
  text-transform: capitalize;
  letter-spacing: 0!important;
  &:hover {color: #C1C1C1; transition: 0.8s ease-in-out};
  margin:1rem;
`
const Navbar = () => {

  const { user } = useContext(AuthContext)
  const { logout } = UseLogout()

  const handleLogout = (e) => {
    e.preventDefault()
    logout()
  }

return (
  <StyledNavbarBox>
    <StyledNavbarInnerContainer>
      <Link href="main-page">
        <Netflix />
      </Link>
      <Box>
        {user ? (
          <StyledSignButton onClick={handleLogout}>Log out</StyledSignButton>
        ) : (
          <Link href="login" sx={{ textDecoration: "none" }}>
            <StyledSignButton>Sign in</StyledSignButton>
          </Link>
        )}
        <StyledSignButton href="movies">Movies</StyledSignButton>
      </Box>
    </StyledNavbarInnerContainer>
  </StyledNavbarBox>
);
}

export default Navbar

