import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { green } from '@mui/material/colors';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const fabStyle = {
    position: 'fixed',
    bottom: 60,
    right: 50,
  };

const fabGreenStyle = {
    color: 'common.white',
    bgcolor: green[500],
    '&:hover': {
      bgcolor: green[600],
    },
  };

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

export default function FloatingActionButtonUpIcon() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="inherit" sx={{...fabStyle, ...fabGreenStyle}} aria-label="dehaze">
        <KeyboardArrowUpIcon onClick={returnTop}/>
      </Fab>
    </Box>
  );
}
