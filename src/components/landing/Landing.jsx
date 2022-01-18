import { Link } from 'react-router-dom'
import React from 'react'

function Landing() {
    return (
        <div>
            Landing Page
            <Link to="/login"> Login </Link>
            <Link to="/register"> Register </Link>
        </div>
    )
}

export default Landing