import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./css/header.css"
import { IconButton, Tooltip } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom'
import Searchbar from './Searchbar';
import Logout from '../auth/Logout';
import PropTypes from 'prop-types'


function Header(props) {

    const navigate = useNavigate()
    const location = useLocation()

    function onHeaderClick() {
        if(location.pathname !== "/contacts" && location.pathname !== "/profile") {
            navigate("/contacts")
        }
    }

    const profileClick = () => navigate("/profile")

    const profileIcon = (<Tooltip title="Profile">
                            <IconButton onClick={profileClick}>
                                <AccountCircleIcon style={{ fontSize: '48' }} />
                            </IconButton>
                        </Tooltip>)
    const logoutIcon = <Logout/>

    let icon = location.pathname === "/profile" ? logoutIcon : profileIcon


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
                {icon}
            </div>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    search: PropTypes.any,
    setSearchQuery: PropTypes.func
}

export default Header
