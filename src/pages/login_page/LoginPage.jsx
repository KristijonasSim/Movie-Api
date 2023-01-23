import React from 'react'
import { Box, TextField, Typography, Button, Checkbox, Link} from '@mui/material'
import styled from '@emotion/styled';
import UseLogin from '../../components/hooks/useLogin';
import * as Yup from 'yup';
import {  useFormik } from 'formik';
import netflixImg from '../../components/assets/netflix.jpg'

const LoginFormBox = styled(Box)`
  width: 24%;
  height: 60%;
  min-width: 400px; 
  padding-bottom: 8rem;
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
  width:75%;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top:40px;
  margin-bottom: 20px;
`

const StyledTextField = styled(TextField)`
  background-color: #333333;
  border-radius: 4px;
`

const StyledLoginButton = styled(Button)`
  color: #fff;
  background-color: red;
  padding: 13px 20px;
  width:75%;
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

const StyledCredentialsBox = styled(Box)`
  width: 75%;
  margin-top: 2rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
  color: #8C8C8C;
`

const StyledRegisterLinkBox = styled(Box)`
  width: 75%;
  margin-top: 2rem;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  color: #8C8C8C;
`

const StyledHeroSection = styled(Box)`
    background-image: linear-gradient(0deg,transparent 50%,rgba(0,0,0,.7)),radial-gradient(50% 100%,transparent 0,rgba(0,0,0,.7) 100%) , url(${netflixImg});
    background-size: cover;
    height: 120vh
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

  const handleSubmit = values => {
          const formatObjectForPost = {
            email:values.email,
            password:values.password
          }
          login(formatObjectForPost)
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
  <StyledHeroSection>
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }} component='form' onSubmit={formik.handleSubmit}>
      <LoginFormBox>
        <Box sx={{display:'flex', justifyContent:'flex-start', width:'75%', marginTop:'40px', }}>
           <Typography variant='h4'>Sign in</Typography>
        </Box>
         <StyledInputBox>
            <StyledTextField 
              sx={{ input: { color: '#fff', marginLeft:'20px', marginBottom:'10px'}}} 
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

         <StyledCredentialsBox sx={{color: '#fff'}}>
              <Box>
                <Checkbox sx={{color: '#fff', padding: 0, '&.Mui-checked':{color: '#fff'}}}/>
                  Remember me
              </Box>
            <Link href='#' sx={{color: '#8C8C8C', textDecoration: 'none'}}>Need help?</Link>
          </StyledCredentialsBox>

          <StyledRegisterLinkBox>
                <Typography sx={{mb: 2}} >New to Netflix? <Link href='register' sx={{color: '#fff'}}> Sign up now. </Link></Typography>
                <Typography>This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link href='#'>Learn more.</Link></Typography>
          </StyledRegisterLinkBox>

      </LoginFormBox>
       </Box>
  </StyledHeroSection>
  );
}

export default LoginPage