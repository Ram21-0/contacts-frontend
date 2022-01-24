import React from 'react'
import { useNavigate } from 'react-router-dom'

import ContactListItem from './ContactListItem'

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import "./css/contactListview.css"

function ContactListview(props) { 

    const navigate = useNavigate()

    function addContactHandler() {
        navigate("/contacts/create")
    }

    return (
        <div className='contactt-list-container'>
            {
                props.list.map( 
                    contact => <ContactListItem key={contact.contactId} contact={contact}/> 
                )
            }

            <div className="fab">
                <Fab className="fab" color="primary" variant="extended" onClick={addContactHandler}>
                    <AddIcon sx={{ mr: 1 }} />
                    {"Add Contact"}
                </Fab>
            </div>
              
        </div>
    )
}

export default ContactListview