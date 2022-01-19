import { Link } from 'react-router-dom'
import React from 'react'
import LandingHeader from './LandingHeader'
import { Button } from '@mui/material'

function Landing() {
    return (
        <div className="landing-page">

            <LandingHeader/>

            <div>
                Landing Body
                
                <Link to="/login"> 
                    <Button> LOGIN </Button> 
                </Link>

                <Link to="/register"> 
                    <Button> REGISTER </Button>
                </Link>
            </div>

        </div>
        
    )
}

export default Landing