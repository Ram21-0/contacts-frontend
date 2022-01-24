import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./css/contact.css"

import InformationCard from '../common/InformationCard';

function Contact() {

    useEffect(() => {
        window.history.back = () => navigate("contacts") 
    })

    const { state } = useLocation()
    const navigate = useNavigate()

    const contact = state
    const dataValues = [
        { label: "Address", value: contact.address },
        { label: "Date of birth", value: contact.dob },
        { label: "Score", value: contact.score },
    ]

    function editHandler() {
        navigate("/contacts/edit/" + contact.contactId, { state: contact})
    }

    return (
            <InformationCard
                name={contact.name}
                email={contact.email}
                phoneNo={contact.phoneNo} 
                dataValues={dataValues}
                edit
                editHandler={editHandler} />
    )
}

export default Contact