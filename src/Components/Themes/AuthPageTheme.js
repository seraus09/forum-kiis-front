import { createTheme } from '@mui/material/styles';

const orange = "#F2A74B";
const textLight = "#eaf2f4";
const textDark = "#0D0D0D";
const borderLight = "rgba(206,212,218, .993)";

const AuthPageTheme = createTheme({
  mainContainer: {
    background:
      "linear-gradient(180deg, rgba(169,198,217,1) 15%, rgba(242,167,75,1) 90%)",
    boxShadow: ".2px 12px 18px rgba(131,153,167,0.6)",
    boxShadowHover: "0px 24px 36px rgba(131,153,167,0.99)",
  },
  
  avatar: {
    background: "rgba(255,255,255,0.85)",
    boxShadow: "0px 0px 12px rgba(131,153,167,0.99)"
  },
  
  icon: {
    color: "rgba(131,153,167,0.79)"
  },
  
  inputs: {
    color: textDark,
    borderColor: borderLight,
  },
  
  button: {
    textDark: textDark,
    orange: orange,
    textLight: textLight
  },
  palette: {
    background: {
      default: "rgba(204, 234, 251, 0.61)",
    } 
    },
  link: {
    color: "#0D0D0D",
  }
});
  

  
export default AuthPageTheme;
