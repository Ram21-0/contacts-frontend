import React, { useState, useEffect } from 'react'
import { Link, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import ContactListview from './ContactListview'
import Header from '../common/Header'
import { connect } from "react-redux"
import { fetchContacts } from '../../redux/reducerIndex'


import "./css/contactsPage.css"
import Contact from './Contact'
import ContactsSideBar from './ContactsSideBar'
import CreateContact from './CreateContact'
import EditExistingContact from './EditExistingContact'

function ContactsPage(props) {

    console.log("local",localStorage.getItem("user", {
        loggedIn: false,
        user: null,
        jwt: null
    }))

    const fetchAllContactsFunc = props.fetchAllContacts
    const navigate = useNavigate()

    console.log(props.user)

    const [list, setList] = useState([]);

    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if(!props.user.loggedIn) {
            navigate("/login")
        }
        fetchAllContactsFunc(props.user)
        setList(Object.values(props.contacts.contacts))
    }, [])
    
    const contactList = Object.values(props.contacts.contacts)

    function compareFunction(contact1,contact2) {
        if(contact1.score === contact2.score) {
            return contact1.name.localeCompare(contact2.name)
        }
        return contact2.score - contact1.score
    }

    function getListFromSearchQuery() {
        console.log("searchquery",searchQuery);
        if(!searchQuery || searchQuery === "") return contactList
        const currList = []
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
                        {/* <Route path="" element={<ContactListview list={contactList}/>} /> */}
                        <Route path="" element={<ContactListview list={getListFromSearchQuery()}/>} />

                        <Route path="/:id" element={<Contact type="contact"/>} />
                        <Route path="/create" element={<CreateContact/>} />
                        <Route path="/edit/:id" element={<EditExistingContact/>} />
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



const sampleContact = {
    "contactId": "7777777777",
    "name": "tom",
    "email": "tom@flock.com",
    "phoneNo": "7777777777",
    "address": "tom",
    "score": 0,
    "dob": "2000-10-09T18:30:00.000+00:00"
}