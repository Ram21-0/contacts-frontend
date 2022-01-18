import React from 'react'
import { Link } from 'react-router-dom'

function Contact({match}) {
    return (
        <div>
             match.params.id
            <Link to="/contacts"> Contacts </Link>
            <Link to="/edit"> Update </Link>
        </div>
    )
}

export default Contact