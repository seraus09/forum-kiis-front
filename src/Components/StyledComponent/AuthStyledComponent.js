import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';

export const CustomContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(16.3),
    borderRadius: 10,
    backgroundImage: theme.mainContainer.background,
    boxShadow: theme.mainContainer.boxShadow, 
    "&:hover": {
        boxShadow: theme.mainContainer.boxShadowHover
    },
    [theme.breakpoints.up('xl')]: {
        marginTop: theme.spacing(21),
        marginLeft: "auto",
        marginRight: "auto"
      },
    [theme.breakpoints.down('sm')]: {
        borderRadius: 0,
      }
  }));

export const CustomAvatar = styled(Avatar)(({ theme }) => ({
    marginTop: 20,
    position: "relative",
    background: theme.avatar.background,
    width: "100px",
    height: "100px",
    boxShadow: theme.avatar.boxShadow,
    [theme.breakpoints.down('sm')]: {
        width: "80px",
        height: "80px",
      }
  })); 

export const CostumPeopleAltIcon = styled(PeopleAltIcon)(({ theme }) => ({
    width: "50px",
    height: "50px",
    color: theme.icon.color,
    [theme.breakpoints.down('sm')]: {
        width: "50px",
        height: "50px",
      }

  })); 

export const CostumButton= styled(Button)(({ theme }) => ({
    color: theme.button.textDark,
    background: "rgba(255,255,255,.45)",
    position: "relative",
    fontWeight: 400,
    fontFamily: "Raleway, sans-serif",
    overflow: "hidden",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    padding: `${theme.spacing(1.6)}px`,
    border: "none",
    borderRadius: "8px",
    letterSpacing: "3px",

    [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(2),
        width: 345,

      },

    "&::before, &::after": {
        position: "absolute",
        content: '""',
        boxSizing: "border-box",
        borderRadius: "8px",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 1
    },
    "&::before": {
        borderBottom: "2px solid rgba(255,255,255,.58)",
        borderTop: "2px solid rgba(255,255,255,.58)",
        transform: "scale(0,1)"
    },
    "&::after": {
        borderLeft: "3px solid rgba(255,255,255,.58)",
        borderRight: "3px solid rgba(255,255,255,.58)",
        transform: "scale(1,0)"
    },
    "&:hover::before": {
        transform: "scale(1,1)",
        transition: "transform cubic-bezier(0.85,.36,.8,.42) 0.3s"
    },
    "&:hover::after": {
        transform: "scale(1,1)",
        transition: "transform cubic-bezier(0.85,.36,.8,.42) .2s"
    },
    "&::first-letter": {
        color: theme.button.orange
    },
    "&:hover": {
        background: "rgba(169,198,217,0.8)",
        color: theme.button.textLight
    }
  })); 

export const CostumTextField = styled(TextField)(({ theme }) => ({
    position: "reletive",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontFamily: "Cutive Mono, monospace",
    color: theme.inputs.textDark,
    fontSize: "18px",
    padding: `${theme.spacing(1.5)}px ${theme.spacing(1)}px`,
    borderRadius: "8px",
    boxShadow: "1px 2px 20px rgba(169,198,217,0.29457423) ",
    "&:hover fieldset": {
      background: "rgba(169,198,217,0.36457423) ",

    },
    
    [theme.breakpoints.down('sm')]: {
        width: 345,
        marginLeft: theme.spacing(2),
      },
    
      
  })); 

  export const CostumLink = styled(Link)(({ theme }) => ({
    color: theme.link.color,
    fontFamily: "Raleway, sans-serif",

  })); 
