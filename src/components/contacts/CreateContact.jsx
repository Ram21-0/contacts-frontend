import { Link } from 'react-router-dom'
import React from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { useForm } from "react-hook-form";

import axios from "axios"
import { insertContact } from '../../redux/reducerIndex';
import { connect } from "react-redux"
import { useNavigate } from 'react-router-dom'

function CreateContact(props) {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const navigate = useNavigate()
      const user = props.user


      const onSubmit = (data) => {
          //do something on submit
          console.log("user state", user);
          data.userId = user.user.userId
          console.log("data",data);
          console.log("props.user",props.user)
          console.log("headers",{headers: {
            "Authorization" : `Bearer ${props.user.jwt}`
        }})
          axios.post("http://localhost:8080/contacts/add", 
          data,
          { 
              headers: {
                  "Authorization" : `Bearer ${props.user.jwt}`
              }
          },
          ).then(response => {
              // dispatch(deleteContactAction(contact))
              const newContact = response.data
              console.log("inserted",newContact)
              props.insertContact(newContact)
              // todo : write a getUserById query
              navigate(`/contacts`,{contact: newContact})
              
          }).catch(error => {
              console.log("error",error)
          })
        };
        
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

const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      // fetchAllContacts: () => dispatch(fetchContacts())
      insertContact: (contact) => dispatch(insertContact(contact))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateContact)

// export default CreateContact 
