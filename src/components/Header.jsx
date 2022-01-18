import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "../css/header.css"
import { Icon, IconButton } from '@mui/material';

function Header() {
    return (
        <div className='header'>
            <div className="title">
                Contacts
            </div>
            <div className="search-container">

            </div>

            <div className="settings-container">
                <IconButton>
                    <SettingsIcon style={{fontSize:'48'}}/>
                </IconButton>
            </div>

            <div className="profile-container">
                <IconButton>
                    <AccountCircleIcon style={{fontSize:'48'}}/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
