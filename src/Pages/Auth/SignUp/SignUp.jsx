import {React, useEffect, useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import registerUser from '../../../Store/Auth/register/actions';
import { useDispatch, useSelector } from 'react-redux';
import SnackBarSuccess from '../../../Components/Snackbar/SnackbarSuccess';
import SnackBarError from '../../../Components/Snackbar/SnackbarError';
import { useFormik } from 'formik';
import SignUpFormValidators from '../../../Components/Validators/SignUpFormValidators'
import { 
  CustomContainer, 
  CustomAvatar, 
  CostumPeopleAltIcon,
  CostumButton,
  CostumTextField
} from '../../../Components/StyledComponent/AuthStyledComponent';
import AuthPageTheme from '../../../Components/Themes/AuthPageTheme'



const SignUp =()=> {
  const dispatch = useDispatch();
  const registerState = useSelector((state) => state.registerReducer);
  const [snackBarErrOpen, setSnackBarErrOpen] = useState(false);
  const [snackBarOpenSuccses, setSnackBarOpenSuccses] = useState(false);
  
  const handleCloseSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBarErrOpen(false);
    if (snackBarOpenSuccses) {
      setSnackBarOpenSuccses(false);
      window.location.replace('/signin');
    }
  };

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password1: '',
      password2: ''
    },
    validationSchema: SignUpFormValidators,
    onSubmit: (values, {resetForm}) => {
      dispatch(registerUser(values,resetForm));
    },
  }); 
  useEffect(()=> {
    if (registerState.success) {
        setSnackBarOpenSuccses(true);
        setSnackBarErrOpen(false);
      } 
    else if (registerState.error && registerState.error?.length > 0 ) {
      setSnackBarErrOpen(true);
      setSnackBarOpenSuccses(false);
     } 

    },[registerState]);

  return (
    <ThemeProvider theme={AuthPageTheme}>
       <CssBaseline />
      <CustomContainer 
        component="main" 
        maxWidth="xs">
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
          <Box 
            component="form" 
            noValidate 
            onSubmit={formik.handleSubmit} 
            sx={{ mt: 3}}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CostumTextField
                  onChange={formik.handleChange}
                  autoComplete="given-name"
                  name="first_name"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={formik.values.first_name}
                  error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                  helperText={formik.touched.first_name && formik.errors.first_name}
                />
              </Grid>
              <Grid item xs={12}>
                <CostumTextField
                  onChange={formik.handleChange}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="last_name"
                  value={formik.values.last_name}
                  error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                  helperText={formik.touched.last_name && formik.errors.last_name}
                />
              </Grid>
              <Grid item xs={12}>
                <CostumTextField
                  onChange={formik.handleChange}
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
              </Grid>
              <Grid item xs={12}>
                <CostumTextField
                  onChange={formik.handleChange}
                  required
                  fullWidth
                  name="password1"
                  label="Password"
                  type="password"
                  id="password1"
                  autoComplete='new-password'
                  value={formik.values.password1}
                  error={formik.touched.password1 && Boolean(formik.errors.password1)}
                  helperText={formik.touched.password1 && formik.errors.password1}
                />
              </Grid>
              <Grid item xs={12}>
                <CostumTextField
                  onChange={formik.handleChange}
                  required
                  fullWidth
                  name="password2"
                  label="Confirm password"
                  type="password"
                  id="password2"
                  autoComplete='new-password'
                  value={formik.values.password2}
                  error={formik.touched.password2 && Boolean(formik.errors.password2)}
                  helperText={formik.touched.password2 && formik.errors.password2}
                />
              </Grid>
            </Grid>
            <CostumButton
              type="submit"
              fullWidth
              variant="contained"
            >
              { registerState.loading ? "Loading...": "Sign Up"}
            </CostumButton>
            <Grid 
              container 
              justifyContent="flex-end"
              sx={{
                  marginBottom: 2,
                  paddingRight: 10,
              }}>
              <Grid item>
                <Link 
                  href="/signin" 
                  variant="body2"
                  sx={{
                    color: "#0D0D0D",
                    fontFamily: "Raleway, sans-serif",
                  }}
                  >
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
            <SnackBarSuccess
              open={snackBarOpenSuccses}
              handleClose={handleCloseSnackBar}
              message="Registration successful!
              Please check your email to activate your account."
            />
            <SnackBarError
              open={snackBarErrOpen}
              handleClose={handleCloseSnackBar}
              message={registerState.error}
            />
          </Box>
        </Box>
      </CustomContainer>
    </ThemeProvider>
  );
}

export default (SignUp);