import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ContactListview from './ContactListview'
import Header from '../common/Header'
import { connect } from "react-redux"
import { fetchContacts } from '../../redux/reducerIndex'

import "./css/contactsPage.css"
import Contact from './Contact'
import ContactsSideBar from './ContactsSideBar'
import CreateContactForm from './CreateContactForm'
import EditContactForm from './EditContactForm'

function ContactsPage(props) {

    const fetchAllContactsFunc = props.fetchAllContacts
    const navigate = useNavigate()

    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        if(!props.user.loggedIn) {
            navigate("/login") 
        }
        fetchAllContactsFunc(props.user)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            if(!props.user.loggedIn) {
                navigate("/login") 
            }
            fetchAllContactsFunc(props.user)
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    
    const contactList = Object.values(props.contacts.contacts)

    function compareFunction(contact1,contact2) {
        if(contact1.score === contact2.score) {
            return contact1.name.localeCompare(contact2.name)
        }
        return contact2.score - contact1.score
    }

    function getListFromSearchQuery() {
        if(!searchQuery || searchQuery === "") return contactList
        return contactList.filter(contact => contact.name.trim().toLowerCase().startsWith(searchQuery))
            .sort(compareFunction)
    }

    return (

        <div className='contacts-page'>

            <div className="contacts-top">
                <Header search setSearchQuery={setSearchQuery} title="Contacts"/>
            </div>
            
            <div className="contacts-bottom">

                <div className="contacts-sidebar">
                    <ContactsSideBar/>
                </div>

                <div className="contacts-body">
                    <Routes>
                        <Route path="" element={<ContactListview list={getListFromSearchQuery()}/>} />
                        <Route path="/:id" element={<Contact type="contact"/>} />
                        <Route path="/create" element={<CreateContactForm/>} />
                        <Route path="/edit/:id" element={<EditContactForm/>} />
                    </Routes>
                </div>

            </div>        
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllContacts: (user) => dispatch(fetchContacts(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactsPage) 