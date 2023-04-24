import {React, useEffect}from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { 
  CustomContainer, 
  CustomAvatar, 
  CostumPeopleAltIcon,
  CostumButton,
  CostumTextField,
  CostumLink
} from '../../../Components/StyledComponent/AuthStyledComponent';
import AuthPageTheme from '../../../Components/Themes/AuthPageTheme'
import SignInFormValidators from '../../../Components/Validators/SignInFormValidators';
import { loginUser } from '../../../Store/Auth/login/actions';
import { useNavigate } from 'react-router-dom';

const SignIn=()=> {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginState = useSelector(state => state.loginReducer);
  
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
    if (loginState.isAuthenticated) {
        navigate('/dashboard');
      } 
    },[loginState.isAuthenticated, navigate]);
  


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
                <CostumLink 
                  href="/reset-password" 
                  variant="body2"
                  >
                  {"Forgot password?"}
                </CostumLink>
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
          </Box>
        </Box>
      </CustomContainer>
    </ThemeProvider>
  );
}

export default SignIn;