import * as React from 'react';
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import headerTheme from '../Themes/HeaderTheme';
import Link from '@mui/material/Link';
import { ThemeProvider } from '@mui/material/styles';
import { 
  CostumAppBar,
  CostumHeaderSvgIcon,
  CostumHeaderContainer
 } from '../StyledComponent/HeaderStyledComponent';

const NavBar = () => {
  return (
    <ThemeProvider theme={headerTheme}>
    <CostumAppBar>
      <CostumHeaderContainer>
        <Link href="/">
          <CostumHeaderSvgIcon 
            component={Logo} 
            inheritViewBox/>
        </Link>
      </CostumHeaderContainer>
    </CostumAppBar>
    </ThemeProvider>
  );
}
export default NavBar;