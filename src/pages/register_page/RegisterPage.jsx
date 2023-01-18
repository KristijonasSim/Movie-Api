import { Box, styled, Typography, TextField, Slider } from '@mui/material'
import { useParams } from 'react-router-dom';

import {  useFormik } from 'formik';
import RegisterPageButton from './RegisterPageButton'
import React from 'react'
import netflixImg from '../../components/assets/netflix.jpg'
import * as Yup from 'yup';
import UseRegister from '../../components/hooks/useRegister';


const StyledRegisterForm = styled(Box)`
    width: 40%;
    height: 100%;
    border-radius: 10px ;
    color:#fff;
    background-color: rgba(0,0,0,0.8);
    padding:4rem;
`

const StyledHeroSection = styled(Box)`
    background-image: linear-gradient(0deg,transparent 50%,rgba(0,0,0,.7)),radial-gradient(50% 100%,transparent 0,rgba(0,0,0,.7) 100%) , url(${netflixImg});
    background-size: cover;
    height: 100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`

const StyledInputBox = styled(Box)`
    width:100%;
    height:80%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-wrap: wrap;
`

const StyledTextField = styled(TextField)`
    width: 40%;
    margin: 0 2rem;
    background-color: #333333;
`

const StyledTextFieldFull = styled(TextField)`
    width: 100%;
    margin: 0 2rem;
    background-color: #333333;
    border-radius: 4px;
`


const validationSchema = Yup.object({
    email: Yup.string()
      .email()
      .required('Please enter a valid email'),
    name: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Please enter your name'),
    surname: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Please enter your surname'),
    country: Yup.string()
      .required('You must select country'),
    age: Yup.number()
      .required('You must provide your age')
      .min(16, 'You must be over 16 years old'), 
    password: Yup.string()
      .required('No password provided.')
      .min(8, "Password must contain 8 characters")
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires an uppercase letter'),
    passwordRepeat: Yup.string().label('Confirm password').required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
})    




const RegisterPage = () => {

const { signup, error, isLoading } = UseRegister()



const handleSubmit = (values, e) => {
  const formatObjectForPost = {
    email: values.email,
    name: values.name,
    surname: values.surname,
    country: values.country,
    age: values.age,
    password: values.password
  }
  signup(formatObjectForPost)
  console.log(formatObjectForPost)
}

  const formik = useFormik({
    initialValues:{
      email:'',
      name:'',
      surname:'',
      country:'',
      age:10,
      password:'',
      passwordRepeat:''
    },
    dirt:true,
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema,
      onSubmit: handleSubmit
  })


  return (
<StyledHeroSection>
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70%', padding: '4rem'}} >   
    <StyledRegisterForm component='form' onSubmit={formik.handleSubmit}>
        <Typography
          sx={{mb:4}} 
          variant='h3'>
            Register 
        </Typography>

        <StyledInputBox>
            <StyledTextFieldFull
              sx={{ input: { color: '#fff', marginLeft:'20px', marginBottom:'10px'}}} 
              InputLabelProps={{
                style: { color: '#8C8C8C', marginLeft: '24px' },
              }}
              id="email"
              error = {!!formik.errors?.email && formik.touched?.email}            
              name="email"
              label="Email"
              type='email'
              variant="standard"
              helperText={formik.errors?.email}
              onChange={(formik.handleChange)}
              value={formik.values.email}
            />
            <StyledTextField
              sx={{ input: { color: '#fff', marginLeft:'20px', marginBottom:'10px'}}} 
              InputLabelProps={{
                style: { color: '#8C8C8C', marginLeft: '24px' },
              }}
              error = {!!formik.errors?.name && formik.touched?.name}   
              id="name"
              name="name"
              label="Name"
              type='text'
              variant="standard"
              helperText={formik.errors?.name}
              onChange={(formik.handleChange)}
              value={formik.values.name}
            />
            <StyledTextField
              sx={{ input: { color: '#fff', marginLeft:'20px', marginBottom:'10px'}}} 
              InputLabelProps={{
                style: { color: '#8C8C8C', marginLeft: '24px' },
              }}
              error = {!!formik.errors?.surname && formik.touched?.surname}   
              id="surname"
              name="surname"
              label="Surname"
              type='text'
              variant="standard"
              helperText={formik.errors?.surname}
              onChange={(formik.handleChange)}
              value={formik.values.surname}
            />
            <StyledTextField
              sx={{ input: { color: '#fff', marginLeft:'20px', marginBottom:'10px'}}} 
              InputLabelProps={{
                style: { color: '#8C8C8C', marginLeft: '24px', },
              }}
              error = {!!formik.errors?.surname && formik.touched?.surname}   
              id="country"
              name="country"
              label="Country"
              type='text'
              variant="standard"
              helpertext={formik.errors?.country}
              onChange={(formik.handleChange)}
              value={formik.values.country}
            />
            <Box sx={{width:'40%', m:'0 2rem', color: '#8C8C8C'}}>
              <Typography>Age</Typography>
              <Slider 
               sx={{color:'red'}}
               id='age'
               name='age'
               type='number'
               value={formik.values.age}
               onChange={(event, newValue) => {
                  formik.setFieldValue("age", newValue);
                }}
               min={0}
               max={100}
               step={1}
               aria-labelledby="discrete-slider"
               valueLabelDisplay="auto"
              />
              <Box sx={{color: '#D32F2F'}}>{formik.errors?.age}</Box>
            </Box>

            
            <StyledTextFieldFull
            sx={{ input: { color: '#fff', marginLeft:'20px', marginBottom:'10px'}}} 
              fullWidth
              InputLabelProps={{
                style: { color: '#8C8C8C', marginLeft: '24px' },
              }}
              error = {!!formik.errors?.password && formik.touched?.password}  
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="standard"
              helperText={formik.errors?.password}
              onChange={(formik.handleChange)}
              value={formik.values.password}
              />

            <StyledTextFieldFull
            sx={{ input: { color: '#fff', marginLeft:'20px', marginBottom:'10px'}}} 
              fullWidth
              InputLabelProps={{
                style: { color: '#8C8C8C', marginLeft: '24px' },
              }}
              error = {!!formik.errors?.passwordRepeat && formik.touched?.passwordRepeat}  
              id="passwordRepeat"
              name="passwordRepeat"
              label="Repeat password"
              type="password"
              variant="standard"
              helperText={formik.errors?.passwordRepeat}
              onChange={(formik.handleChange)}
              value={formik.values.passwordRepeat}
              />

          </StyledInputBox>
        <RegisterPageButton/>
    </StyledRegisterForm>
    </Box>
</StyledHeroSection>
  )
}

export default RegisterPage