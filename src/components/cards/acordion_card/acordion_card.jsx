import React from 'react'
import { Box } from '@mui/system'
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Accordion, Typography } from '@mui/material';
import { questionsData } from './questionsData';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';


const AcordionCard = () => {


const StyledAccordionSummary = styled(AccordionSummary)`
  width:100%;
  display:flex; 
  justify-content:space-between; 
  align-items:center;  
  border-bottom:2px solid black; 
  font-family: sans-serif;
  & .MuiAccordionSummary-content {
     margin: 0;
   };
  & .Mui-expanded {      
    svg{
    transform: rotate(180deg);
    }
  }

`
const StyledExpandIcon = styled(CloseIcon)`
  color: #fff;
  font-size: 2rem;
  transform: rotate(45deg);

`


  return (
    <Box sx={{width: '100%', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', }}>
      <Typography 
        variant='h2'
        sx={{mb:10, textAlign:'center' }}> 
        Frequently Asked Questions
      </Typography>
      
      {questionsData.map((item) => (
      <Accordion 
      sx={{backgroundColor:'#303030', color:'#fff', width: '50%', mb:2, minWidth:'750px'}}
      key={item.id}>
          <StyledAccordionSummary 
          expandIcon={<StyledExpandIcon/>}
>
             <h1>{item.title}</h1>
          </StyledAccordionSummary>
          <AccordionDetails 
              sx={{fontFamily: 'sans-serif'}}>
              <h2>{item.subtitle}</h2>
              <br/>
              <h2>{item.subtitle2}</h2>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}

export default AcordionCard