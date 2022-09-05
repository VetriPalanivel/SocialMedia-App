import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { render } from "@testing-library/react";
import UpdateAccountInfo from "../UpdateAccountInfo/UpdateAccountInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  // if everything is okay then simply here show to the profile page is that okay
  let history = useNavigate();
  const [val, setVal] = useState({
    firstName: "",
    lastName: "",
    email: "",
    passwordInput: "",
    reenter: "",
  });
  function validateForm(e) {
    if (
      val.firstName == "" ||
      val.lastName === "" ||
      val.email === "" ||
      val.passwordInput === "" ||
      val.reenter === "" ||
      val.passwordInput !== val.reenter
    ) {
      alert("All fields must be filled! and passwords should have to match");
    } else {
      history("/post");
    }
  }
  function getDetails() {
    if (true) return <UpdateAccountInfo />;
  }
  function handleChange(event) {
    setVal({ ...val, [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value);
  }
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        name="firstName"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <TextField
        id="filled-basic"
        label="Last Name"
        variant="filled"
        name="lastName"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <TextField
        id="filled-basic"
        label="Email"
        variant="filled"
        name="email"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <TextField
        id="filled-basic"
        label="Password"
        variant="filled"
        name="passwordInput"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <TextField
        id="filled-basic"
        label="Re Enter Password"
        variant="filled"
        name="reenter"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <Stack spacing={2} direction="row">
        <Button variant="text" onClick={validateForm}>
          SignUp
        </Button>
      </Stack>
    </Box>
  );
}

export default SignUp;
