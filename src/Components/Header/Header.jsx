import {useState} from 'react';
import { ThemeProvider } from '@mui/material/styles';

import { 
  CostumAppBar,
  CostumHeaderContainer,
  CostumMenuBox
 } from '../StyledComponent/HeaderStyledComponent';
import AuthenticatedLinks from './AuthenticatedLinks';
import headerTheme from '../Themes/HeaderTheme';
import { useSelector } from 'react-redux';

 const NavBar = () => {
  // const isAuthenticated = useSelector(state => state.loginReducer.isAuthenticated);
  cost isAuthenticated = false
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  return (
    <ThemeProvider theme={headerTheme}>
    <CostumAppBar>
      <CostumHeaderContainer maxWidth={false}>
          <CostumMenuBox>
            {isAuthenticated ?
              <AuthenticatedLinks
              handleOpenNavMenu={handleOpenNavMenu}
              handleOpenUserMenu={handleOpenUserMenu}
              handleCloseNavMenu={handleCloseNavMenu}
              handleCloseUserMenu={handleCloseUserMenu}
              anchorElNav={anchorElNav}
              anchorElUser={anchorElUser}
              /> : null}
          </CostumMenuBox>
      </CostumHeaderContainer>
    </CostumAppBar>
    </ThemeProvider>
  );
}
export default NavBar;
