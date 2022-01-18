import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            Login page
            <Link to="/register"> Register </Link>
            <Link to="/contacts"> Login </Link>
        </div>
    )
}

export default Login
