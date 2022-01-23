import { Link } from 'react-router-dom'
import React from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { useForm } from "react-hook-form";

import axios from "axios"
import { loginCurrentUser } from '../../redux/reducerIndex';
import { useNavigate } from 'react-router-dom'
import { connect } from "react-redux"
import { axiosAuthenticateRequest } from '../../axios/axios';
import { REGISTER_PATH } from '../../axios/endpoints';



function Register(props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const navigate = useNavigate()

      const onSubmit = (requestData) => {
        //do something on submit
        console.log(requestData);
        axiosAuthenticateRequest(
            REGISTER_PATH,
            requestData,
            (response) => {
                console.log("registered",response)
                props.login({
                    jwt: response.data.jwt, 
                    user: response.data.user
                })
                navigate("/contacts")
             },
            (error) => { console.log("err in reg", error) }
        )
        // axios.post("http://localhost:8080/register",
        //     requestData
        // ).then(response => {
        //     console.log("registered",response)
        //     props.login({
        //       jwt: response.data.jwt, 
        //       user: response.data.user
        //   })
        //   navigate("/contacts")
        // }).catch(error => {
        //   console.log("error in reg",error);
        // })
        // axios.p
        };
        
      return (
        <Container maxWidth="xs">
          <h1>Register</h1>
          <form onSubmit={handleSubmit(onSubmit)}>

            <Box mb={2}>
              <TextField
                variant="outlined"
                label="emaiil"
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

            <Box mb={2}>
              <TextField
                variant="outlined"
                label="Name"
                fullWidth
                {...register("name", {
                  required: "Required field",
                })}
              />
            </Box>

            <Box mb={2}>
              <TextField
                variant="outlined"
                label="Phone Number"
                fullWidth
                {...register("phoneNo", {
                  required: "Required field",
                })}
              />
            </Box>
            <Box mb={2}>
              <TextField
                variant="outlined"
                label="Address"
                fullWidth
                {...register("address", {
                  required: "Required field",
                })}
              />
            </Box>

        
            <Box mb={2}>
              <TextField
                variant="outlined"
                label="DOB YYYY-MM-DD"
                fullWidth
                {...register("dob", {
                  required: "Required field",
                })}
              />
            </Box>


            <Button type="submit" variant="contained" color="primary" >
              Register
            </Button>
            <Link to="/login">
            <Button >
              Login 
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
)(Register)
