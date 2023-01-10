import React from 'react'
import { Box, TextField, Typography, Button} from '@mui/material'
import styled from '@emotion/styled';
import UseLogin from '../../components/hooks/useLogin';
import * as Yup from 'yup';
import {  useFormik } from 'formik';

const LoginFormBox = styled(Box)`
  width: 25%;
  height: 65%;
  min-width: 400px;
  border: 2px solid black;
  border-radius: 10px ;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  flex-direction:column;
  color:#fff;
  background-color: rgba(0,0,0,0.8);
`

const StyledErrorBox = styled(Box)`
  margin-top: 20px;
  font-size: 1.1rem;
  color: red;
`

const StyledInputBox =styled(Box)`
  display:flex;
  width:65%;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top:40px;
  margin-bottom: 20px;
`;

const StyledTextField = styled(TextField)`
  background-color: #333333;
  border-radius: 4px;
  color:blue;
`
const StyledLoginButton = styled(Button)`
  color: #fff;
  background-color: red;
  padding: 13px 20px;
  width:65%;
  margin-top: 30px;
  font-size: 1rem;
  &:hover {
      background-color: red;
      }
  `

const StyledInputErrors = styled(Box)`
  color: #E87C03;
  display: flex;
  justify-content: flex-start;
  width:100%;
  margin-top:10px;
  
  `

const validationSchema = Yup.object({
        email: Yup.string()
          .required('Please enter a valid email'),
        password: Yup.string()
          .required('Please enter a valid password')
          .min(4,'Password must contain 4 or more characters')
     })

const  LoginPage = () => {

  const  { login, isLoading, error, errorMsg} = UseLogin()

    console.log(error)

  const handleSubmit = values => {
          const formatObjectForPost = {
            email:values.email,
            password:values.password
          }
          login(formatObjectForPost)
          console.log(formatObjectForPost)
     }
   const formik = useFormik({
     initialValues: {
       email: '',
       password: ''
     },
     dirty:true,
     validateOnBlur: false,
     validateOnChange: false,
     validationSchema,
        onSubmit: handleSubmit
    })
return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }} component='form' onSubmit={formik.handleSubmit}>
      <Box sx={{marginRight:'20px'}}>
      </Box>
      <LoginFormBox>
        <Box sx={{display:'flex', justifyContent:'flex-start', width:'65%', marginTop:'40px', }}>
        <Typography variant='h4' sx={{fontFamily: 'Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans', fontWeight:'700'}}>Sign in</Typography>
        </Box>
         <StyledInputBox>
            <StyledTextField 
              sx={{ input: { color: '#fff', marginLeft:'20px', marginBottom:'10px' } }} 
              fullWidth
              InputLabelProps={{
                style: { color: '#8C8C8C', marginLeft: '24px' },
              }}
              error = {!!formik.errors?.email && formik.touched?.email}
              id="email"
              InputProps={{ disableUnderline: true }}
              name="email"
              label="Email"
              type='email'
              variant="standard"
              onChange={(formik.handleChange)}
              value={formik.values.email}
            />
            <StyledInputErrors>
              {formik.errors?.email}
            </StyledInputErrors>
            <StyledTextField 
              sx={{ input: { color: '#fff', marginLeft:'20px', marginBottom:'10px'}, marginTop:4}} 
              fullWidth
              InputLabelProps={{
                style: { color: '#8C8C8C', marginLeft: '24px' },
              }}
              error = {!!formik.errors?.password && formik.touched?.password}
              id="password"
              InputProps={{ disableUnderline: true }}
              name="password"
              label="Password"
              type="password"
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
              <StyledInputErrors>
              {formik.errors?.password}
            </StyledInputErrors>
            <StyledErrorBox>{error ? errorMsg : null}</StyledErrorBox>
        </StyledInputBox>
        <StyledLoginButton type='submit'>Sign in</StyledLoginButton>
      </LoginFormBox>
    </Box>
  );
}

export default LoginPage