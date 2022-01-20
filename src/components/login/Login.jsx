import { Link } from 'react-router-dom'
import React from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { useForm } from "react-hook-form";

import axios from "axios"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    //do something on submit
    // console.log(data)
    //   console.log({
    //     userId: data.userId,
    //     password: data.password
    // });

    axios.post("http://localhost:8080/authenticate", {
      userId: data.userId,
      password: data.password
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error)
    })

  };

  return (
    <Container maxWidth="xs">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={2}>
          <TextField
            variant="outlined"
            label="email"
            fullWidth
            autoComplete="email"
            autoFocus
            {...register("userId", {
              required: "Required field",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            error={!!errors?.email}
            helperText={errors?.email ? errors.email.message : null}
          />
        </Box>
        <Box mb={2}>
          <TextField
            variant="outlined"
            label="password"
            type="password"
            fullWidth
            autoFocus
            {...register("password", {
              required: "Required field",
            })}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary" >
          Login In
        </Button>
        <Link to="/register">
          <Button >
            Register
          </Button>
        </Link>
      </form>
    </Container>
  );

}

export default Login
