import { Edit, RemoveRedEye } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Tooltip } from '@mui/material';
import React from 'react';
import CustomAvatar from '../common/CustomAvatar';
import { useNavigate } from 'react-router-dom';
import { deleteContact, updateContact } from '../../redux/reducerIndex';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { connect } from "react-redux"

import axios from "axios"

import "./css/contactListItem.css"
import Email from '../common/Email';
import Phone from '../common/Phone';


function ContactListItem(props) {

    let contact = props.contact
    let user = props.user
    const navigate = useNavigate()

    async function handleDelete() {
        axios.delete("http://localhost:8080/contacts/delete/" + contact.contactId, 
        { 
            headers: {
                "Authorization" : `Bearer ` + user.jwt
            }
        }
        ).then(response => {
            // dispatch(deleteContactAction(contact))
            props.deleteContact(contact)
        }).catch(error => {
            console.log(error)
        })
        props.deleteContact(contact,user)
    }

    function handleView(event) {

        axios.post(`http://localhost:8080/contacts/getcontact/${contact.contactId}`, {}, { 
            headers: {
                "Authorization" : `Bearer ` + user.jwt
            }
        }).then(response => {
            console.log("response ",response);
            props.updateContact(response.data)
        }).catch(error => {
            console.log("err",error);
        })
        
        navigate("/contacts/" + contact.contactId, {state: contact})
    }

    return (

        <div className="contact-list-item">

            <div className="contact-list-item-body">

                <CustomAvatar 
                    className='contact-icon'
                    text={contact.name[0]} 
                    onClick={() => console.log("clicked")} />

                <div className="contact-detail">
                    {contact.name}
                </div>
                <div className="contact-detail contact-email">
                    <Email emailId={contact.email}/>
                </div>
                <div className="contact-detail contact-phone">
                    <Phone phoneNo={contact.phoneNo}/>
                </div>

            </div>

            <div className="contact-list-item-right">
                <Tooltip title={`View ${contact.name}`}>
                    <IconButton onClick={(e) => handleView(e)}>
                        <RemoveRedEye/>
                    </IconButton>
                </Tooltip>
                <Tooltip title={`Delete ${contact.name}`}>
                    <IconButton onClick={(e) => handleDelete(e)}>
                        <DeleteIcon/>
                    </IconButton>
                </Tooltip>
            </div>
        </div> 
        // </IconButton>
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
        deleteContact: (contact,user) => dispatch(deleteContact(contact,user)),
        updateContact: (contact) => dispatch(updateContact(contact))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactListItem)