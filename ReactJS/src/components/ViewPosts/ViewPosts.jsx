import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function BasicTextFields() {
  const [val, setVal] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  function getData(e) {
    setVal({ ...val, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  }
  function validate(e) {
    if (val.email === "" || val.password === "") {
      alert("all fields must be filled!");
    } else {
      navigate("/post");
    }
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
        id="filled-basic"
        label="Email"
        variant="filled"
        onChange={getData}
        name="email"
      />
      <br />
      <TextField
        id="standard-basic"
        label="Password"
        variant="standard"
        onChange={getData}
        name="password"
      />
      <br />
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={validate}>
          Login
        </Button>
      </Stack>
    </Box>
  );
}
