import { IconButton, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { connect } from "react-redux"
import LogoutIcon from '@mui/icons-material/Logout';

import { logoutCurrentUser } from '../../redux/reducerIndex';
import { useNavigate } from 'react-router-dom'
import PopupCard from '../common/PopupCard';

function Logout(props) {

    const navigate = useNavigate()

    const [openDialog, setOpenDialog] = useState(false)
    const [logoutConfirmation, setLogoutConfirmation] = useState(false)

    if(logoutConfirmation) {
        props.logout()
        navigate("/login")
        setLogoutConfirmation(false)
    }

    function logoutHandler() {
        setOpenDialog(true)
    }

    return (
        <div>
            <PopupCard title={`Logout?`}
                openDialog={openDialog} setOpenDialog={setOpenDialog}
                setConfirmation={setLogoutConfirmation} />

            <Tooltip title="Logout">
                <IconButton onClick={logoutHandler}>
                    <LogoutIcon style={{ fontSize: '48' }}/>
                </IconButton>
            </Tooltip>
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
)(Logout)
