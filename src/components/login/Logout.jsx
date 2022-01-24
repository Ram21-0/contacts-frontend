import { IconButton, Tooltip } from '@mui/material';
import React from 'react';
import { connect } from "react-redux"
import LogoutIcon from '@mui/icons-material/Logout';

import { logoutCurrentUser } from '../../redux/reducerIndex';
import { useNavigate } from 'react-router-dom'

function Logout(props) {

    const navigate = useNavigate()

    function logoutHandler() {
        props.logout()
        navigate("/login")
    }

    return (
        <Tooltip title="Logout">
            <IconButton onClick={logoutHandler}>
                <LogoutIcon style={{ fontSize: '48' }}/>
            </IconButton>
        </Tooltip>
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
)(Logout)
