import { Edit } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import React from 'react';
import CustomAvatar from '../common/CustomAvatar';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';
import { deleteContact } from '../../redux/reducerIndex';
import { connect } from "react-redux"

import axios from "axios"


function ContactListItem(props) {

    let contact = props.contact
    let user = props.user
    const navigate = useNavigate()

    async function handleDelete() {
        props.deleteContact(contact,user)
    }

    function onClickHandler() {
        // props.selectContact(contact)

        axios.post(`http://localhost:8080/getcontact/${contact.contactId}`, {},{ 
            headers: {
                // "Authorization" : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYW1AZmxvY2suY29tIiwiZXhwIjoxNjQyNjk2NzAzLCJpYXQiOjE2NDI2NjA3MDN9.bM-fanzRVJWjSzEndUWGFjUjU50eD9ADwsgERGXImks`
                "Authorization" : `Bearer ` + user.jwt
                // "Access-Control-Allow-Origin": "*"
            }
        }).then(response => {
            console.log("response ",response);
        }).catch(error => {
            console.log("err",error);
        })
        
        navigate("/contacts/" + contact.contactId, {state: contact})
    }

    return (

        <div className="contact-list-item">
            <CustomAvatar srcText={contact.name[0].toUpperCase()} onClick={() => console.log("clicked")}/>

            <span>{contact.name}</span>
            <span>{contact.email}</span>
            <span>{contact.phoneNo}</span>

            <IconButton onClick={handleDelete}>
                <DeleteIcon/>
            </IconButton>

            <IconButton onClick={onClickHandler}>
                <RemoveRedEyeIcon/>
            </IconButton>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // fetchAllContacts: () => dispatch(fetchContacts()),
        deleteContact: (contact,user) => dispatch(deleteContact(contact,user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactListItem)