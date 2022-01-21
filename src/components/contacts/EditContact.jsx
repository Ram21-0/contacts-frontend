import { Link } from 'react-router-dom'
import React from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { useForm } from "react-hook-form";
import axios from "axios" ;

import { connect } from 'react-redux'
import { useLocation, useNavigate } from "react-router-dom"
import { updateContact,insertContact } from '../../redux/reducerIndex';

function EditContact(props) {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const navigate = useNavigate()

      console.log("props on edit",props);

      const onSubmit = (data) => {
        //do something on submit
        console.log(data);
        data = {
          ...data,
          userId: contact.userId,
          contactId: contact.contactId
        }
        console.log("props",props);
        axios.put("http://localhost:8080/contacts/update", 
        data,
        { 
            headers: {
                "Authorization" : `Bearer ${props.user.jwt}`
            }
        }).then(response => {
            console.log("response on submit edit",response.data);
            props.updateContact(response.data)
            navigate("/contacts")

        }).catch(error => {
          console.log(error);
        })
      };

    const { state } = useLocation()
    const contact = state
    console.log("state in edit contact",state);

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
                defaultValue={contact.email}
                {...register("email", {
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
                defaultValue={contact.name}
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
                defaultValue={contact.phoneNo}

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
                defaultValue={contact.address}
                {...register("address", {
                  required: "Required field",
                })}
              />
            </Box>

        
            <Box mb={2}>
              <TextField
                variant="outlined"
                label="DOB YYYY-MM-DD"
                defaultValue={contact.dob}
                fullWidth
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

const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      // fetchAllContacts: () => dispatch(fetchContacts())
      insertContact: (contact) => dispatch(insertContact(contact)),
      updateContact: (contact) => dispatch(updateContact(contact))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditContact)