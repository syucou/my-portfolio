import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { grey } from '@mui/material/colors';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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
  //初期は閉じる状態にする false
  const [state, setState] = useState(false);

  //drawerを見せる
  const showDrawer = () => {
    setState(true);
  };

  //drawerを閉じる
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
      open={state}//初期はfalse
      onClose={onClose}
      anchor={'right'}//右から現れる
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
        }}><Link to="/" className="link-drawer">{home_li}</Link></h4>
        <h4 style={{
          color:"darkgray",
          width: "50px",
          margin:"auto",
          padding:"10px 0 0 0",
        }}><Link to="/profile" className="link-drawer">{profile_li}</Link></h4>
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
        }}><Link to="/gallery" className="link-drawer">{gallery_li}</Link></h4>
        <h4 style={{
          color:"darkgray",
          width: "50px",
          margin:"auto",
          padding:"10px 0 0 0",
        }}><Link to="/contact" className="link-drawer">{contact_li}</Link></h4>
      </Box>
    </Drawer>
    </div>
  );
}