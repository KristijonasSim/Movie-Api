import React from 'react'
import { Box } from '@mui/system'
import styled from '@emotion/styled'
import { footerData } from './footerData'
import { Link, Typography } from '@mui/material'

const StyledFooterContainer = styled(Box)`
width: 100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
padding:70px 0;
flex-direction:column;
color: #8C8C8C;

`

const Footer = () => {
  return (
    <StyledFooterContainer>
      <Link href='#' sx={{width:'50%', m:5, textDecoration:'none', color:'#8C8C8C', fontSize:'1.2rem'}}>
          Questions? Contact us.
      </Link>
      <Box sx={{width:'50%', display:'flex', flexWrap:'wrap'}}>
        {footerData.map((item) => (
          <Link href='#' key={item.id} sx={{flex: '1 0 21%', m:1, textDecoration:'none', color:'#8C8C8C', fontSize:'0.9rem', fontFamily:'sans-serif'}}>
            {item.title}
          </Link>
        ))}
      </Box>
        <Typography sx={{width:'50%', mt:6}}>
         Netflix Lithuania
      </Typography>
    </StyledFooterContainer>
  )
}

export default Footer