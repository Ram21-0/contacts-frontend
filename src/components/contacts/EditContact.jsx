import { Link } from 'react-router-dom'
import React from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { useForm } from "react-hook-form";
import axios from "axios" ;

import { useLocation } from "react-router-dom"

function EditContact(props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = async (data) => {
        //do something on submit
        console.log(data);
        };

    const { state } = useLocation()
    const contact = state.contact

    return (
        <Container maxWidth="xs">
          <h1>Contact</h1>
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
                label="Name"
                fullWidth
                autoFocus
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
                autoFocus
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
                autoFocus
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
                autoFocus
                {...register("dob", {
                  required: "Required field",
                })}
              />
            </Box>


            <Button type="submit" variant="contained" color="primary" >
              Publish 
            </Button>
            <Link to="/contacts">
            <Button >
              Return 
            </Button>
            </Link>
          </form>
        </Container>
      );
}

export default EditContact;