import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

// const categories = [
//   {
//     id: 'Build',
//     children: [
//       {
//         id: 'Authentication',
//         icon: <PeopleIcon />,
//         active: true,
//       },
//       { id: 'Database', icon: <DnsRoundedIcon /> },
//       { id: 'Storage', icon: <PermMediaOutlinedIcon /> },
//       { id: 'Hosting', icon: <PublicIcon /> },
//       { id: 'Functions', icon: <SettingsEthernetIcon /> },
//       {
//         id: 'Machine learning',
//         icon: <SettingsInputComponentIcon />,
//       },
//     ],
//   },
//   {
//     id: 'Quality',
//     children: [
//       { id: 'Analytics', icon: <SettingsIcon /> },
//       { id: 'Performance', icon: <TimerIcon /> },
//       { id: 'Test Lab', icon: <PhonelinkSetupIcon /> },
//     ],
//   },
// ];

// const item = {
//   py: '2px',
//   px: 3,
//   color: 'rgba(255, 255, 255, 0.7)',
//   '&:hover, &:focus': {
//     bgcolor: 'rgba(255, 255, 255, 0.08)',
//   },
// };


const Navigator=(props)=> {
  const { ...other } = props;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      </Box>
  );
}

export default Navigator;