import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import SvgIcon from '@mui/material/SvgIcon';
import { styled } from '@mui/material/styles';

export const CostumAppBar = styled(AppBar)(({ theme }) => ({
    background: theme.appBar.bgcolor,
    }));

export const CostumHeaderContainer = styled(Container)(({ theme }) => ({
    marginLeft: theme.spacing(12.4),
    height: 65,
    [theme.breakpoints.down('md')]: {
        marginLeft: theme.spacing(1.5),
      },
    [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(2),
      },
}));

export const CostumHeaderSvgIcon = styled(SvgIcon)(({ theme }) => ({
    marginTop: theme.spacing(1.5),
    width: 200,
    height: 40,
    color: theme.headerLogo.color
}));
