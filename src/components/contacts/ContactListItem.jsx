import { RemoveRedEye } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import CustomAvatar from '../common/CustomAvatar';
import { useNavigate } from 'react-router-dom';
import { deleteContact, updateContact } from '../../redux/reducerIndex';
import { connect } from "react-redux"

import "./css/contactListItem.css"
import Email from '../common/Email';
import Phone from '../common/Phone';
import { axiosDeleteRequest, axiosPostRequest } from '../../axios/axios';
import { DELETE_CONTACT_PATH, GET_CONTACT_BY_ID_PATH } from '../../axios/endpoints';
import PopupCard from '../common/PopupCard';
import { handleErrors } from '../../axios/errors';

function ContactListItem(props) {

    let contact = props.contact
    let user = props.user
    const navigate = useNavigate()

    const [openDialog, setOpenDialog] = useState(false)
    const [deleteConfirmation, setDeleteConfirmation] = useState(false)

    if(deleteConfirmation) {
        axiosDeleteRequest(
            `${DELETE_CONTACT_PATH}/${contact.contactId}`,
            user,
            (response) => { props.deleteContact(contact) },
            (error) => { handleErrors(error) }
        )
        setDeleteConfirmation(false)
    }
    
    function handleDelete() {
        setOpenDialog(true)
    }

    function handleView() {
        axiosPostRequest(
            `${GET_CONTACT_BY_ID_PATH}/${contact.contactId}`,
            user,
            {},
            (response) => { props.updateContact(response.data) },
            (error) => { handleErrors(error) }
        )
        
        navigate("/contacts/" + contact.contactId, {state: contact})
    }

    return (

        <div className="contact-list-item">

            <PopupCard title={`Delete ${contact.name}?`}
                openDialog={openDialog} setOpenDialog={setOpenDialog}
                setConfirmation={setDeleteConfirmation} />

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
        deleteContact: (contact,user) => dispatch(deleteContact(contact,user)),
        updateContact: (contact) => dispatch(updateContact(contact))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactListItem)