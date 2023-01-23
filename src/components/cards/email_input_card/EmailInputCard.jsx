import React from "react";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";




const StyledTextField = styled(TextField)`
    background-color: #fff;
    width: 70%;
    height: 60px;
`;



const EmailInputCard = ({ value, handleChange }) => {


  return (

    <StyledTextField
      sx={{
        input: { color: "black", marginLeft: "20px", marginBottom: "10px" },
      }}
        InputLabelProps={{
          style: { color: "#8C8C8C", marginLeft: "24px" },
        }}
        id="email"
        name="email"
        label="Email adress"
        type="email"
        onChange={handleChange}
        variant="standard"
        value={value}
        InputProps={{ disableUnderline: true }}
    />
  )
}
export default EmailInputCard;
