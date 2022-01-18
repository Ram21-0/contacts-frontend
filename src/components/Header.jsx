import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "../css/header.css"
import { Icon, IconButton } from '@mui/material';
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div className='header'>

            {/* HELLO */}
            <Link to="/contacts">
            <div className="title">
                Contacts
            </div>
            </Link>
            
            <div className="search-container">

            </div>

            {/* <div className="settings-container">
                <IconButton>
                    <SettingsIcon style={{fontSize:'48'}}/>
                </IconButton>
            </div> */}

            <div className="profile-container">
                <Link to="/user">
                <IconButton>
                    <AccountCircleIcon style={{fontSize:'48'}}/>
                </IconButton>
                </Link>
            </div>
        </div>
    )
}

export default Header
