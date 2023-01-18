import React from "react";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import { TextField, Button } from "@mui/material";

const StyledTextField = styled(TextField)`
  background-color: #fff;
  border-radius: 4px;
  width: 70%;
  color: blue;
  height: 60px;
  border-radius: 0;
`;
const StyledButton = styled(Button)`
  border-radius: 0;
  border-left: 1px solid #333;
  border-top-left-radius: 0;
  margin: 0 !important;
  font-size: 1.5rem;
  min-height: 40px;
  width: 30%;
  background-color: #e10813;
  color: #fff;
  text-transform: capitalize;
  &:hover {
    background-color: red;
  }
`;
const EmailInputCard = ({ value, handleChange }) => (

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
        value={value}
        onChange={handleChange}
        variant="standard"
        InputProps={{ disableUnderline: true }}
    />
);

export default EmailInputCard;
