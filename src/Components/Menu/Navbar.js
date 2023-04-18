import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

const NavBar = () => {
  return (
    <AppBar 
      position="static"
      sx={{
        bgcolor: "#91B7F0"
      }}
      >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SvgIcon 
            component={Logo} 
            inheritViewBox
            
            sx={
              {
                width: 200,
                height: 40,
                color: "#b9d4eb"
              }
            }/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;