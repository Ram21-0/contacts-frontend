import React from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { useForm } from "react-hook-form";
import { connect } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { axiosPostRequest, axiosPutRequest } from "../../axios/axios";
import { ADD_CONTACT_PATH, UPDATE_CONTACT_PATH } from "../../axios/endpoints";
import { handleErrors } from "../../axios/errors";

function CreateContact(props) {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const navigate = useNavigate()

      const existingContact = props.contact
      const user = props.user

      const onSubmit = props.onFormSubmit

      return (
        <Container maxWidth="xs">
          <h1>{existingContact ? existingContact.name : "New Contact"}</h1>
          <form onSubmit={handleSubmit(onSubmit)}>

            <Box mb={2}>
              <TextField
                variant="outlined"
                label="email"
                fullWidth
                autoComplete="email"
                defaultValue={existingContact ? existingContact.email : ""}
                autoFocus
                {...register("email", {
                  required: "Required field",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                error={!!errors?.email}
              />
            </Box>

            <Box mb={2}>
              <TextField
                variant="outlined"
                label="Name"
                defaultValue={existingContact ? existingContact.name : ""}
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
                defaultValue={existingContact ? existingContact.phoneNo : ""}
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
                defaultValue={existingContact ? existingContact.address : ""}
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
                defaultValue={existingContact ? existingContact.dob : ""}
                {...register("dob", {
                  required: "Required field",
                })}
              />
            </Box>


            <Button type="submit" variant="contained" color="primary" >
              {existingContact ? "SAVE" : "ADD"} 
            </Button>
            <Button onClick={() => navigate("/contacts")}>
              {"DISCARD"} 
            </Button>
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

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateContact)
