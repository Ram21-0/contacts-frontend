import React from 'react'
import { Link } from 'react-router-dom'
import ContactsViewer from './ContactsViewer'

function ContactsPage() {
    return (
        <div>
            <Link to="/contact/id"> Contact1 </Link>
            <Link to="/edit/id"> AddContact </Link>

            <ContactsViewer/>

        </div>
    )
}

export default ContactsPage