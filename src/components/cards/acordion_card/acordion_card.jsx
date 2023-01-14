import React from 'react'
import { Box } from '@mui/system'
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Accordion, Typography } from '@mui/material';
import { questionsData } from '../../../questionsData';

const AcordionCard = () => {

  console.log(questionsData)
  return (
    <Box sx={{width: '100%', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
      <Typography 
      variant='h2'
      sx={{mb:10}}>
      Frequently Asked Questions</Typography>
      {questionsData.map((item) => (
      <Accordion 
      sx={{backgroundColor:'#303030', color:'#fff', width: '50%', mb:2}}
      key={item.id}>
          <AccordionSummary 
          sx={{borderBottom:'2px solid black', fontFamily: 'sans-serif', '& .MuiAccordionSummary-content': {margin: '0'}}}>
            <h1>{item.title}</h1>
          </AccordionSummary>
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