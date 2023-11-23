import * as yup from 'yup';

const SignUpFormValidators = yup.object({
    firstName: yup
       .string('Enter first name')
       .min(2, 'First name is too short!')
       .max(250, 'First name is too long!')
       .required('First name is required'),
     lastName: yup
       .string('Enter last name')
       .min(2, 'Last name is too short!')
       .max(250, 'Last name is too long!')
       .required('Last name is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

export default SignUpFormValidators;