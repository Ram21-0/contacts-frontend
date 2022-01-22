import React from 'react';
import CreateContact from './CreateContact';
import {useLocation} from 'react-router-dom'

function EditExistingContact(props) {

    const { state } = useLocation()
    const contact = state

    console.log("edit existing contact state",contact)

    return (
        <CreateContact contact={contact} />
    )
}

export default EditExistingContact;
