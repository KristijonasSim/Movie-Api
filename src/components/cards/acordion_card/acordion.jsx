import React from 'react'
import { Box } from '@mui/system'
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Accordion, Typography } from '@mui/material';
import { questionsData } from '../../../questionsData';

const AcciordionLife = () => {

  return (
    <Box sx={{width: '100%', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
      <Typography 
      variant='h2'
      sx={{mb:10}}>
      Frequently Asked Questions</Typography>
      <Accordion sx={{backgroundColor:'#303030', color:'#fff', width: '50%', mb:2}}>
          <AccordionSummary 
          sx={{borderBottom:'2px solid black', fontFamily: 'sans-serif', '& .MuiAccordionSummary-content': {margin: '0'}}}>
            <h1>What is Netflix?</h1>
          </AccordionSummary>
          <AccordionDetails 
              sx={{fontFamily: 'sans-serif'}}>
              <h2>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</h2>
              <br/>
              <h2>
              You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</h2>
          </AccordionDetails>
        </Accordion>

      <Accordion sx={{backgroundColor:'#303030', color:'#fff', width: '50%', mb:2}}>
          <AccordionSummary 
          sx={{borderBottom:'2px solid black', fontFamily: 'sans-serif', '& .MuiAccordionSummary-content': {margin: '0'}}}>
            <h1>How much does Netflix cost?</h1>
          </AccordionSummary>
          <AccordionDetails 
              sx={{fontFamily: 'sans-serif'}}>
              <h2>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.</h2>
          </AccordionDetails>
        </Accordion>

      <Accordion sx={{backgroundColor:'#303030', color:'#fff', width: '50%', mb:2}}>
          <AccordionSummary 
          sx={{borderBottom:'2px solid black', fontFamily: 'sans-serif', '& .MuiAccordionSummary-content': {margin: '0'}}}>
            <h1>How much does Netflix cost?</h1>
          </AccordionSummary>
          <AccordionDetails 
              sx={{fontFamily: 'sans-serif'}}>
              <h2>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.</h2>
          </AccordionDetails>
        </Accordion>

              <Accordion sx={{backgroundColor:'#303030', color:'#fff', width: '50%', mb:2}}>
          <AccordionSummary 
          sx={{borderBottom:'2px solid black', fontFamily: 'sans-serif', '& .MuiAccordionSummary-content': {margin: '0'}}}>
            <h1>Where can I watch?</h1>
          </AccordionSummary>
          <AccordionDetails 
              sx={{fontFamily: 'sans-serif'}}>
              <h2>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.</h2>
          </AccordionDetails>
        </Accordion>

              <Accordion sx={{backgroundColor:'#303030', color:'#fff', width: '50%', mb:2}}>
          <AccordionSummary 
          sx={{borderBottom:'2px solid black', fontFamily: 'sans-serif', '& .MuiAccordionSummary-content': {margin: '0'}}}>
            <h1>How do I cancel?</h1>
          </AccordionSummary>
          <AccordionDetails 
              sx={{fontFamily: 'sans-serif'}}>
              <h2>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.</h2>
          </AccordionDetails>
        </Accordion>

              <Accordion sx={{backgroundColor:'#303030', color:'#fff', width: '50%', mb:2}}>
          <AccordionSummary 
          sx={{borderBottom:'2px solid black', fontFamily: 'sans-serif', '& .MuiAccordionSummary-content': {margin: '0'}}}>
            <h1>What can i watch on Netflix?</h1>
          </AccordionSummary>
          <AccordionDetails 
              sx={{fontFamily: 'sans-serif'}}>
              <h2>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.</h2>
          </AccordionDetails>
        </Accordion>

              <Accordion sx={{backgroundColor:'#303030', color:'#fff', width: '50%', mb:2}}>
          <AccordionSummary 
          sx={{borderBottom:'2px solid black', fontFamily: 'sans-serif', '& .MuiAccordionSummary-content': {margin: '0'}}}>
            <h1>Is Netflix good for kids?</h1>
          </AccordionSummary>
          <AccordionDetails 
              sx={{fontFamily: 'sans-serif'}}>
              <h2>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.</h2>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{backgroundColor:'#303030', color:'#fff', width: '50%', mb:2}}>
          <AccordionSummary 
          sx={{borderBottom:'2px solid black', fontFamily: 'sans-serif', '& .MuiAccordionSummary-content': {margin: '0'}}}>
            <h1>Why am i seeing this language?</h1>
          </AccordionSummary>
          <AccordionDetails 
              sx={{fontFamily: 'sans-serif'}}>
              <h2>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.</h2>
          </AccordionDetails>
        </Accordion>

    </Box>
  )
}

export default AcciordionLife