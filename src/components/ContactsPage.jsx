import React from 'react'
import { Link } from 'react-router-dom'

function ContactsPage() {
    return (
        <div>
            <Link to="/contact/id"> Contact1 </Link>
            <Link to="/edit/id"> AddContact </Link>

        </div>
    )
}

export default ContactsPage