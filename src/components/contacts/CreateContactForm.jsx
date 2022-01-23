import React from 'react';
import { useNavigate } from 'react-router-dom'

import { insertContact } from '../../redux/reducerIndex';
import { connect } from "react-redux"
import ContactForm from './ContactForm';

import { axiosPostRequest } from '../../axios/axios';
import { ADD_CONTACT_PATH } from '../../axios/endpoints';


function CreateContactForm(props) {

    const user = props.user
    const navigate = useNavigate()

    const createNewContact = (data) => {
        console.log("user state", user);
        data.userId = user.user.userId

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

    return (
        <ContactForm onFormSubmit={createNewContact}/>
    )
}

const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      insertContact: (contact) => dispatch(insertContact(contact))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateContactForm)
