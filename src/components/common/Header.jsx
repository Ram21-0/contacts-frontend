import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./css/header.css"
import { Icon, IconButton } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Searchbar from './Searchbar';
import CustomAvatar from './CustomAvatar';


function Header(props) {

    const navigate = useNavigate()
    const location = useLocation()

    function onHeaderClick(event) {
        if(location.pathname !== "/contacts" && location.pathname !== "/profile") {
            navigate("/contacts")
        }
    }

    function handleProfileClick(event) {
        navigate("/profile")
    }

    return (
        <div className='header'>

            <div className="title" onClick={onHeaderClick}>
                {props.title}
            </div>

            <div className="search-container">

                {
                    props.search &&
                    <Searchbar setSearchQuery={props.setSearchQuery}/>
                }

            </div>

            <div className="profile-container">
                <IconButton onClick={handleProfileClick}>
                    <AccountCircleIcon style={{ fontSize: '48' }} />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
