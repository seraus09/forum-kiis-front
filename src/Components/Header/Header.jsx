import {useState} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';

import { 
  CostumAppBar,
  CostumHeaderSvgIcon,
  CostumHeaderContainer,
  CostumLink,
  CostumMenuBox
 } from '../StyledComponent/HeaderStyledComponent';
import AuthenticatedLinks from './AuthenticatedLinks';
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import headerTheme from '../Themes/HeaderTheme';

 const NavBar = () => {
  const isAuthenticated = useSelector(state => state.loginReducer.isAuthenticated);
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
         {isAuthenticated ?
          <CostumLink href="/dashboard">
            <CostumHeaderSvgIcon 
              component={Logo} 
              inheritViewBox/>
          </CostumLink>
          : 
            <CostumLink href="/">
              <CostumHeaderSvgIcon 
                component={Logo} 
                inheritViewBox/>
            </CostumLink>
          }
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
