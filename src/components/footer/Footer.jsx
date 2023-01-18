import React from 'react'
import { Box } from '@mui/system'
import styled from '@emotion/styled'

const StyledFooterContainer = styled(Box)`
width: 100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
padding:70px 0px;
`

const Footer = () => {
  return (
    <StyledFooterContainer>
      <Box sx={{width:'50%', backgroundColor:'green'}}>
        Footeris
      </Box>
    </StyledFooterContainer>
  )
}

export default Footer