import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import SvgIcon from '@mui/material/SvgIcon';
import { styled } from '@mui/material/styles';
import { Link, Box } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';

export const CostumAppBar = styled(AppBar)(({ theme }) => ({
    background: theme.appBar.bgcolor,
    height: 65,
    }));

export const CostumHeaderContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(1.5),
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: false
}));

export const CostumLink = styled(Link)(({ theme }) => ({
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
        marginLeft: theme.spacing(1.5),
      },
    [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(2),
      },
}));

export const CostumHeaderSvgIcon = styled(SvgIcon)(({ theme }) => ({
    width: 200,
    height: 40,
    color: theme.headerLogo.color,
}));

export const CostumMenuBox = styled(Box)(({ theme }) => ({
    marginRight: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
        marginRight: theme.spacing(1.5),
      },
    [theme.breakpoints.down('sm')]: {
        marginRight: theme.spacing(2),
      },
}));