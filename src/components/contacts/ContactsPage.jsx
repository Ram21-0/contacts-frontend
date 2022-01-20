import React, { useState, useEffect } from 'react'
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import ContactListview from './ContactListview'
import Header from '../common/Header'
import { connect } from "react-redux"
import { fetchContacts } from '../../redux/reducerIndex'


import "./css/contactsPage.css"
import Contact from './Contact'
import ContactsSideBar from './ContactsSideBar'
import CreateContact from './CreateContact'
import EditContact from './EditContact'

function ContactsPage(props) {

    const fetchAllContactsFunc = props.fetchAllContacts

    useEffect(() => {
        fetchAllContactsFunc()
    }, [])

    const contactList = Object.values(props.contacts.contacts)

    return (

        <div className='contacts-page'>

            <div className="contacts-top">
                <Header search title="Contacts"/>
            </div>
            
            <div className="contacts-bottom">

                <div className="contacts-sidebar">
                    <ContactsSideBar/>
                </div>

                <div className="contacts-body">
                    <Routes>
                        <Route path="" element={<ContactListview list={contactList}/>} />
                        <Route path="/:id" element={<Contact/>} />
                        <Route path="/add" element={<CreateContact/>} />
                        <Route path="/edit/:id" element={<EditContact/>} />
                    </Routes>
                </div>

            </div>        
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllContacts: () => dispatch(fetchContacts())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactsPage)



const sampleContact = {
    "contactId": "7777777777",
    "name": "tom",
    "email": "tom@flock.com",
    "phoneNo": "7777777777",
    "address": "tom",
    "score": 0,
    "dob": "2000-10-09T18:30:00.000+00:00"
}