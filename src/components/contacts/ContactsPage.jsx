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


    /*
     * To make the local data consistent with database
     * syncing with the database every 5 seconds
     */ 

    function syncWithDatabase() {
        if(!props.user.loggedIn) {
            navigate("/login") 
        }
        fetchAllContactsFunc(props.user)
    }

    // Initial fetching
    useEffect(() => {
        if(!props.user.loggedIn) {
            navigate("/login") 
        }
        fetchAllContactsFunc(props.user)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            syncWithDatabase()
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    
    const contactList = Object.values(props.contacts.contacts)

    function contactComparatorByScore(contact1,contact2) {
        // compare contacts first by their score, then by name
        if(contact1.score === contact2.score) {
            return contact1.name.localeCompare(contact2.name)
        }
        return contact2.score - contact1.score
    }

    function contactComparatorByName(contact1,contact2) {
        // compare contact by name
        return contact1.name.localeCompare(contact2.name)
    }

    // filter contacts according to search query
    function getListFromSearchQuery() {
        if(!searchQuery || searchQuery === "") return contactList.sort(contactComparatorByScore)
        return contactList.filter(contact => contact.name.trim().toLowerCase().startsWith(searchQuery))
            .sort(contactComparatorByScore)
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