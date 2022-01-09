import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { StarBorder } from '@mui/icons-material';

export default function BasicList() {
  return (
    <Box sx={{ width: '100%', maxWidth: 720, bgcolor: 'background.paper' }} className="box">
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="nezumiのポートフォリオサイト開設！！" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="サブページは鋭意作成中！" />
            </ListItemButton>
          </ListItem>
         
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
