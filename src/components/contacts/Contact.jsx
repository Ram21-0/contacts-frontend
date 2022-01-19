import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./css/contact.css"

import { Avatar } from '@mui/material';
import CustomAvatar from '../common/CustomAvatar';


function Contact(props) {

    const { state } = useLocation()
    console.log("state in contact", state)

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
                <p>{state.address}</p>
                <p>{state.dob}</p>
                <p>{state.score}</p>
            </div>
        </div>
    )
}

export default Contact