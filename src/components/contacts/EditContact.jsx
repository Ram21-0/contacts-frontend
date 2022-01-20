import React from 'react';

import { useLocation } from "react-router-dom"

function EditContact(props) {

    const { state } = useLocation()
    const contact = state.contact

    return (
  
        <div>

        </div>

    )
}

export default EditContact;