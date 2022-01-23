import { Link } from 'react-router-dom'
import React from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { useForm } from "react-hook-form";
import { browserHistory } from 'react-router';

import axios from "axios"
import { insertContact, updateContact } from '../../redux/reducerIndex';
import { connect } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { axiosPostRequest, axiosPutRequest } from '../../axios/axios';
import { ADD_CONTACT_PATH, UPDATE_CONTACT_PATH } from '../../axios/endpoints';

function CreateContact(props) {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const navigate = useNavigate()
      const user = props.user

      const existingContact = props.contact

      const onSubmit = (data) => {
          if(props.contact) {
              editExistingContact(data)
          }
          else {
            createNewContact(data)
          }
      }

      const createNewContact = (data) => {
          //do something on submit
          console.log("create new contact")
          console.log("user state", user);
          data.userId = user.user.userId
          console.log("data",data);
          console.log("props.user",props.user)
          console.log("headers",{headers: {
            "Authorization" : `Bearer ${props.user.jwt}`
        }})
        axiosPostRequest(
            ADD_CONTACT_PATH,
            user,
            data,
            (response) => {
              const newContact = response.data
              console.log("inserted",newContact)
              props.insertContact(newContact)
              navigate("/contacts/" + newContact.contactId, {state: newContact})
            },
            (error) => { console.log(error) }
        )
      };

        const editExistingContact = (data) => {
            data = {
                ...data,
                userId: existingContact.userId,
                contactId: existingContact.contactId,
                score: existingContact.score
            }
            axiosPutRequest(
                UPDATE_CONTACT_PATH,
                user,
                data,
                (response) => {
                    console.log("response on submit edit",response.data);
                    const editedContact = response.data
                    props.updateContact(editedContact)
                    navigate("/contacts/" + editedContact.contactId, {state: editedContact})
                },
                (error) => {
                    console.log(error)
                }
            )
        }
        
        
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
              Publish 
            </Button>
            <Link to="/contacts">
            <Button >
              Discard 
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
)(CreateContact)
