import React from 'react'
import { Link } from 'react-router-dom'
import CreateContact from './contacts/CreateContact'

import { useNavigate, useLocation } from "react-router-dom"

function EditC() {

    const navigate = useNavigate()

    const { state } = useLocation()
    const contact = state



    return (
        <CreateContact contact={contact} />
    )
}

export default EditC