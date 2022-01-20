import React from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'

function Login() {
    return (
        <div>
            Login page
            <Link to="/register"> Register </Link>
            <Link to="/contacts"> Login </Link>

            <Form/>
        </div>
    )
}

export default Login
