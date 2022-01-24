import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./css/header.css"
import { IconButton, Tooltip } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom'
import Searchbar from './Searchbar';
import { connect } from "react-redux"
import { logoutCurrentUser } from '../../redux/reducerIndex';
import Logout from '../login/Logout';

function Header(props) {

    const navigate = useNavigate()
    const location = useLocation()

    function onHeaderClick(event) {
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
    // if(location.pathname === "/profile") {
    //     icon = logoutIcon
    // } 
    // else {
    //     icon = profileIcon
    // }

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

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutCurrentUser())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
