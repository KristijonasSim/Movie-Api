import {
  Grid,
  Box,
  styled,
  Typography,
  TextField,
  Slider,
  Autocomplete,
} from "@mui/material";
import { useFormik } from "formik";
import RegisterPageButton from "./RegisterPageButton";
import React from "react";
import netflixImg from "../../components/assets/netflix.jpg";
import * as Yup from "yup";
import UseRegister from "../../components/hooks/useRegister";
import { useLocation } from "react-router-dom";
import { countries } from "./countrydata";
import { useState } from "react";
const StyledRegisterForm = styled(Box)`
  max-width: 600px;
  height: 70%;
  border-radius: 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 4rem;
  margin: auto;
`;

const RegisterFormTitle = styled(Typography)`
  color: #fff;
  margin-bottom: 2rem;
`;

const StyledHeroSection = styled(Box)`
  background-image: linear-gradient(0deg, transparent 50%, rgba(0, 0, 0, 0.7)),
    radial-gradient(50% 100%, transparent 0, rgba(0, 0, 0, 0.7) 100%),
    url(${netflixImg});
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  background-color: #333333;
  & .MuiInputLabel-root {
    color: #8c8c8c;
    margin-left: 24px;
    margin-top: 8px;
  }
  & .MuiInputLabel-root.Mui-focused {
    color: #8c8c8c;
  }
    & .MuiInput-root {
      color: #fff;
      padding: 10px 20px;
      height: 100%;
    }
    & .MuiInput-root:after {
      border-bottom: 2px solid red;
    }
    & .Mui-error {
      padding-left: 10px;
    }
  }
`;

const validationSchema = Yup.object({
  email: Yup.string().email().required("Please enter a valid email"),
  name: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Please enter your name"),
  surname: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Please enter your surname"),
  country: Yup.string().required("You must select country"),
  age: Yup.number()
    .required("You must provide your age")
    .min(16, "You must be over 16 years old"),
  password: Yup.string()
    .required("No password provided."),
    // .min(8, "Password must contain 8 characters")
    // .matches(/[0-9]/, "Password requires a number")
    // .matches(/[a-z]/, "Password requires a lowercase letter")
    // .matches(/[A-Z]/, "Password requires an uppercase letter"),
  passwordRepeat: Yup.string()
    .label("Confirm password")
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const RegisterPage = () => {
  const { signup, error, isLoading } = UseRegister();
  const location = useLocation();
  const emailValue = location.state.emailValue;
  const [selectedOption, setSelectedOption] = useState("");

  console.log(selectedOption.label);


const handleTextFieldChange = (event) => {
  setSelectedOption(event.target.value);
};

  const formik = useFormik({
    initialValues: {
      email: emailValue,
      name: "",
      surname: "",
      country: selectedOption,
      age: 10,
      password: "",
      passwordRepeat: "",
    },
    dirt: true,
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema,
    onBlur: true,
    onSubmit: signup,
  });
  return (
    <StyledHeroSection>
      <StyledRegisterForm component="form" onSubmit={formik.handleSubmit}>
        <RegisterFormTitle variant="h3">Register</RegisterFormTitle>
        <Grid container height="80%">
          <Grid item xs={12}>
            <StyledTextField
              id="email"
              error={!!formik.errors?.email && formik.touched?.email}
              name="email"
              label="Email"
              type="email"
              variant="standard"
              helperText={formik.errors?.email}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <StyledTextField
              error={!!formik.errors?.name && formik.touched?.name}
              id="name"
              name="name"
              label="Name"
              type="text"
              variant="standard"
              helperText={formik.errors?.name}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Grid>
          <Grid item xs={12} sm={5} ml="auto">
            <StyledTextField
              error={!!formik.errors?.surname && formik.touched?.surname}
              id="surname"
              name="surname"
              label="Surname"
              type="text"
              variant="standard"
              helperText={formik.errors?.surname}
              onChange={formik.handleChange}
              value={formik.values.surname}
            />
          </Grid>

          <Grid item xs={12} sm={5}>
            <Autocomplete
              name="country"
              onChange={(event, newValue) => {
                setSelectedOption(newValue);
              }}
              autoSelect={true}
              value={selectedOption.label}
              id="country-select-demo"
              options={countries}
              autoHighlight
              onBlur={formik.handleBlur}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    alt=""
                  />
                  {option.label}
                </Box>
              )}
              renderInput={(params, option) => (
                <StyledTextField
                  fullWidth
                  {...params}
                  id="country"
                  name="country"
                  label="Country"
                  type="text"
                  variant="standard"
                  error={!!formik.errors?.country && formik.touched?.country}
                  helpertext={formik.errors?.country}
                  onChange={handleTextFieldChange}
                  value={selectedOption}
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={5} ml="auto" color="#8C8C8C">
            <Typography>Age</Typography>
            <Slider
              sx={{ color: "red" }}
              id="age"
              name="age"
              type="number"
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
            <Box sx={{ color: "#D32F2F" }}>{formik.errors?.age}</Box>
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              fullWidth
              error={!!formik.errors?.password && formik.touched?.password}
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="standard"
              helperText={formik.errors?.password}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </Grid>

          <Grid item xs={12}>
            <StyledTextField
              fullWidth
              error={
                !!formik.errors?.passwordRepeat &&
                formik.touched?.passwordRepeat
              }
              id="passwordRepeat"
              name="passwordRepeat"
              label="Repeat password"
              type="password"
              variant="standard"
              helperText={formik.errors?.passwordRepeat}
              onChange={formik.handleChange}
              value={formik.values.passwordRepeat}
            />
          </Grid>
        </Grid>
        <RegisterPageButton />
      </StyledRegisterForm>
    </StyledHeroSection>
  );
};

export default RegisterPage;
