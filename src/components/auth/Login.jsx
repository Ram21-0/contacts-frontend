import { Link } from 'react-router-dom'
import React from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { useForm } from "react-hook-form";
import { connect } from "react-redux"

import { loginCurrentUser } from '../../redux/reducerIndex';
import { useNavigate } from 'react-router-dom'
import { axiosAuthenticateRequest } from '../../axios/axios';
import { LOGIN_PATH } from '../../axios/endpoints';
import { handleErrors } from '../../axios/errors';

function Login(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()

  const onSubmit = async (requestData) => {

      axiosAuthenticateRequest(
          LOGIN_PATH,
          {
            userId: requestData.userId,
            password: requestData.password
          },
          (response) => { 
              props.login({
                  jwt: response.data.jwt, 
                  user: response.data.user
              })
              navigate("/contacts")
          },
          (error) => {
              handleErrors(error)
          }
      )
      

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

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => dispatch(loginCurrentUser(data))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)