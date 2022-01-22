import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "./css/contact.css"

import { Avatar, Fab } from '@mui/material';
import CustomAvatar from '../common/CustomAvatar';
import { Edit } from '@mui/icons-material';
import Email from '../common/Email';
import Phone from '../common/Phone';
import NameCard from '../common/NameCard';
import Data from '../common/Data';
import InformationCard from '../common/InformationCard';


function Contact(props) {

    useEffect(() => {
        window.history.back = () => navigate("contacts") 
    })

    const { state } = useLocation()
    console.log("state in contact", state)

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
        // <div className="contact-container">

            <InformationCard
                    name={contact.name}
                    email={contact.email}
                    phoneNo={contact.phoneNo} 
                    dataValues={dataValues}
                    edit
                    editHandler={editHandler} />

            /* <NameCard 
                name={contact.name} 
                phoneNo={contact.phoneNo} 
                emailId={contact.email} />

            <div className="contact-body">

                <Data label="Address" value={contact.address}/>
                <Data label="Date of birth" value={contact.dob}/>
                {
                    props.type == "contact"

                    && <Data label="Score" value={contact.score} classNamw="hidden"/>
                } 
                {
                    props.type == "contact"
                    && <div className="fab-edit">
                        <Fab iconClassName="fab-edit-icon" color="primary" onClick={editHandler}>
                            <Edit />
                        </Fab>
                    </div>
                }
                
            </div> */
        // </div>
    )
}

export default Contact