/* eslint-disable multiline-ternary */
'use client'

import { Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export function AskedQuestion({ question, answer, bullets, answer2 }) {
  return (
    <Accordion
      sx={{
        boxShadow: 'none',
        margin: '10px 0'
      }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon sx={{ color: '#0566FE', fontSize: '40px' }} />
        }
      >
        <Typography
          variant='h5'
          sx={{ color: '#0566FE' }}
          fontFamily='EuclidCircularB'
        >
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ color: '#647491' }}>
        <Typography fontFamily='EuclidCircularB'>{answer}</Typography>
        {bullets ? (
          <ul className='my-4'>
            {bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        ) : undefined}
        {answer2 ? (
          <Typography fontFamily='EuclidCircularB'>{answer2}</Typography>
        ) : undefined}
      </AccordionDetails>
    </Accordion>
  )
}
