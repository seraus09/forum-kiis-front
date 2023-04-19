import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import registerUser from '../Store/Auth/register/actions';
import { useDispatch, useSelector } from 'react-redux';
import SnackBarSuccess from '../Components/Snackbar/SnackbarSuccess';
import SnackBarError from '../Components/Snackbar/SnackbarError';
import { useFormik } from 'formik';
import SignUpFormValidators from '../Components/Validators/SignUpFormValidators';


const Copyright =(props)=> {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        UPSITEGUARD
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const SignUp =()=> {
  const dispatch = useDispatch();
  const registerState = useSelector((state) => state.registerReducer);
  const [snackBarErrOpen, setSnackBarErrOpen] = React.useState(false);
  const [snackBarOpenSuccses, setSnackBarOpenSuccses] = React.useState(false);

  const handleCloseSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBarErrOpen(false);
    setSnackBarOpenSuccses(false)
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
    onSubmit: (values) => {
      dispatch(registerUser(values))
    },
  }); 

  React.useEffect(()=> {
    if (registerState.success) {
        setSnackBarOpenSuccses(true);
      } 
    else if (registerState.error && registerState.error?.length > 0 ) {
      setSnackBarErrOpen(true);
      }
    },[registerState]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={formik.handleChange}
                  autoComplete="given-name"
                  name="first_name"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                  helperText={formik.touched.first_name && formik.errors.first_name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={formik.handleChange}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="last_name"
                  error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                  helperText={formik.touched.last_name && formik.errors.last_name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={formik.handleChange}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={formik.handleChange}
                  required
                  fullWidth
                  name="password1"
                  label="Password"
                  type="password"
                  id="password1"
                  autoComplete='new-password'
                  error={formik.touched.password1 && Boolean(formik.errors.password1)}
                  helperText={formik.touched.password1 && formik.errors.password1}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={formik.handleChange}
                  required
                  fullWidth
                  name="password2"
                  label="Confirm password"
                  type="password"
                  id="password2"
                  autoComplete='new-password'
                  onBlur={formik.handleBlur}
                  error={formik.touched.password2 && Boolean(formik.errors.password2)}
                  helperText={formik.touched.password2 && formik.errors.password2}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
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
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;