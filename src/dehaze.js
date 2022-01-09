import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { grey } from '@mui/material/colors';
import DehazeIcon from '@mui/icons-material/Dehaze';

import Drawer from '@mui/material/Drawer';

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
  const [state, setState] = useState(false);

  const showDrawer = () => {
    setState(true);
  };

  const onClose = () => {
    setState(false);
  };

  const home_li = "HOME";
  const profile_li = "PROFILE";
  const news_li = "NEWS";
  const gallery_li = "GALLERY";
  const contact_li = "CONTACT";

  return (
    <div>
    <Box sx={{ '& > :not(style)': { m: 1 } }} className="dehaze">
      <Fab color="inherit" sx={{...fabStyle, ...fabGreenStyle}} aria-label="dehaze" onClick={showDrawer}>
        <DehazeIcon />
      </Fab>
    </Box>
    <Drawer
      open={state}
      onClose={onClose}
      anchor={'right'}
    >
      <Box
        sx={{ width: 150 }}
        role="presentation"
      >
        <h4 style={{
          color:"darkgray",
          width: "50px",
          margin:"auto",
          padding:"10px 0 0 0",
        }}>{home_li}</h4>
        <h4 style={{
          color:"darkgray",
          width: "50px",
          margin:"auto",
          padding:"10px 0 0 0",
        }}>{profile_li}</h4>
        <h4 style={{
          color:"darkgray",
          width: "50px",
          margin:"auto",
          padding:"10px 0 0 0",
        }}>{news_li}</h4>
        <h4 style={{
          color:"darkgray",
          width: "50px",
          margin:"auto",
          padding:"10px 0 0 0",
        }}>{gallery_li}</h4>
        <h4 style={{
          color:"darkgray",
          width: "50px",
          margin:"auto",
          padding:"10px 0 0 0",
        }}>{contact_li}</h4>
      </Box>
    </Drawer>
    </div>
  );
}