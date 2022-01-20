import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "./css/contact.css"

import { Avatar } from '@mui/material';
import CustomAvatar from '../common/CustomAvatar';
import { Edit } from '@mui/icons-material';


function Contact(props) {

    const { state } = useLocation()
    console.log("state in contact", state)

    const navigate = useNavigate()

    const contact = state

    return (
        <div>
            <div className="contact-head">
                <div className="contact-head-img">
                    <CustomAvatar square size={60} srcText={"AB"}/>
                    <Avatar style={{borderRadius:0}}>AB</Avatar>
                </div>

                <div className="contact-head-data">
                    <p>{contact.name}</p>
                    <p>{contact.email}</p>
                    <p>{contact.phoneNo}</p>
                </div>

            </div>

            <div className="contact-body">
                <p>{contact.address}</p>
                <p>{contact.dob}</p>
                <p>{contact.score}</p>
            </div>

            <Edit onClick={() => {
                navigate("/contacts/edit/" + contact.contactId, { state: contact})
            }}/>
        </div>
    )
}

export default Contact