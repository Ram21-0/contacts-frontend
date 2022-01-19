import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import CustomAvatar from '../common/CustomAvatar';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';

function ContactListItem(props) {

    let contact = props.contact
    const navigate = useNavigate()

    function onClickHandler() {
        // props.selectContact(contact)
        
        navigate("/contacts/" + contact.contactId, {state: contact})
    }

    return (

        <div className="contact-list-item">
            <CustomAvatar srcText={contact.name[0].toUpperCase()} onClick={() => console.log("clicked")}/>

            <span>{contact.name}</span>
            <span>{contact.email}</span>
            <span>{contact.phoneNo}</span>

            <IconButton>
                <Edit/>
            </IconButton>

            <IconButton onClick={onClickHandler}>
                <RemoveRedEyeIcon/>
            </IconButton>
        </div>
    )
}

export default ContactListItem;
