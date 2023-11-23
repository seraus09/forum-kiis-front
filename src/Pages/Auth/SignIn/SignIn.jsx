import {useState, useEffect}from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


import { loginUser } from '../../../Store/Auth/login/actions';
import AuthPageTheme from '../../../Components/Themes/AuthPageTheme'
import SignInFormValidators from '../../../Components/Validators/SignInFormValidators';
import SnackBarError from '../../../Components/Snackbar/SnackbarError';
import SnackBarInfo from '../../../Components/Snackbar/SnackbarInfo';
import { 
  CustomContainer, 
  CustomAvatar, 
  CostumPeopleAltIcon,
  CostumButton,
  CostumTextField,
  CostumLink
} from '../../../Components/StyledComponent/AuthStyledComponent';

const SignIn=()=> {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [snackBarErrOpen, setSnackBarErrOpen] = useState(false);
  const [snackBarOpenInfo, setSnackBarOpenInfo] = useState(false);
  const loginState = useSelector(state => state.loginReducer);
  const token =  useSelector(state => state.loginReducer.token);
 

  const handleCloseSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBarErrOpen(false);
    setSnackBarOpenInfo(false)
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignInFormValidators,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  }); 
  
  useEffect(()=> {
    if (loginState.isAuthenticated || token) {
        navigate('/forum');
      }
    else if (loginState.error && loginState.error?.length > 0 ) {
        setSnackBarErrOpen(true);
       } 
    else if (
      loginState.error?.status === 401 &&
      loginState.error?.data.code === 'token_not_valid' &&
      loginState.error?.data.detail === 'Token is invalid or expired'
      ) {
        setSnackBarOpenInfo(true);
      }
    },[loginState.isAuthenticated, token, loginState.error, navigate]);

  return (
    <ThemeProvider theme={AuthPageTheme}>
      <CustomContainer component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CustomAvatar>
            <CostumPeopleAltIcon />
          </CustomAvatar>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <CostumTextField
              onChange={formik.handleChange}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <CostumTextField
              onChange={formik.handleChange}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <CostumButton
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              {"Sign In"}
            </CostumButton>
            <Grid 
              container  
              justifyContent="space-between"
              marginBottom={2}
              marginLeft={1}>
              <Grid item >
                {/* <CostumLink 
                  href="/reset-password" 
                  variant="body2"
                  >
                  {"Forgot password?"}
                </CostumLink> */}
              </Grid>
              <Grid item>
                <CostumLink 
                  href="/signup" 
                  variant="body2"
                  >
                  {"Don't have an account? Sign Up"}
                </CostumLink>
              </Grid>
            </Grid>
            <SnackBarError
              open={snackBarErrOpen}
              handleClose={handleCloseSnackBar}
              message={loginState.error}
            />
            <SnackBarInfo
                  open={snackBarOpenInfo}
                  handleClose={handleCloseSnackBar}
                  message="Your session was expired"
                />
          </Box>
        </Box>
      </CustomContainer>
    </ThemeProvider>
  );
}

export default SignIn;