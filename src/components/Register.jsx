import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div>
            Register page
            <Link to="/login"> Login </Link>
            <Link to="/contacts"> Submit </Link>
        </div>
    )
}

export default Register
