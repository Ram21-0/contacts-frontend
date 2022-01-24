import React from 'react';
import ContactForm from './ContactForm';

import { useNavigate, useLocation } from 'react-router-dom'

import { updateContact } from '../../redux/reducerIndex';
import { connect } from "react-redux"

import { axiosPutRequest } from '../../axios/axios';
import { UPDATE_CONTACT_PATH } from '../../axios/endpoints';


function EditContactForm(props) {

    const navigate = useNavigate()
    const { state } = useLocation()
    const existingContact = state
    const user = props.user

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
        <ContactForm contact={existingContact} onFormSubmit={editExistingContact}/>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        updateContact: (contact) => dispatch(updateContact(contact))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditContactForm)
  