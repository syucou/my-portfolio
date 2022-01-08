import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { grey } from '@mui/material/colors';
import DehazeIcon from '@mui/icons-material/Dehaze';

const fabStyle = {
    position: 'absolute',
    top: 12,
    right: 50,
  };

const fabGreenStyle = {
    color: 'common.white',
    bgcolor: grey[800],
    '&:hover': {
      bgcolor: grey[700],
    },
  };

export default function FloatingActionButtondeHaze() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }} className="dehaze">
      <Fab color="inherit" sx={{...fabStyle, ...fabGreenStyle}} aria-label="dehaze">
        <DehazeIcon />
      </Fab>
    </Box>
  );
}
