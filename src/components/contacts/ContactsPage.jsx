import React, { useState } from 'react'
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import ContactListview from './ContactListview'
import Header from '../common/Header'

import "./css/contactsPage.css"
import Contact from './Contact'
import ContactsSideBar from './ContactsSideBar'

function ContactsPage() {

    return (

        <div className='contacts-page'>

            <div className="contacts-top">
                <Header search/>
            </div>
            
            <div className="contacts-bottom">

                <div className="contacts-sidebar">
                    <ContactsSideBar/>
                </div>

                <div className="contacts-body">
                    <Routes>
                        <Route path="" element={<ContactListview />} />
                        <Route path="/:id" element={<Contact/>} />
                    </Routes>
                </div>

            </div>        
        </div>
    )
}

export default ContactsPage



const sampleContact = {
    "contactId": "7777777777",
    "name": "tom",
    "email": "tom@flock.com",
    "phoneNo": "7777777777",
    "address": "tom",
    "score": 0,
    "dob": "2000-10-09T18:30:00.000+00:00"
}