import { Button } from '@mui/material';
import React from 'react';
import { connect } from "react-redux"

import { logoutCurrentUser } from '../../redux/reducerIndex';
import { useNavigate } from 'react-router-dom'

function Logout(props) {

    const navigate = useNavigate()

    function logoutHandler() {
        props.logout()
        navigate("/login")
    }

    return (
        <div>
            <Button onClick={logoutHandler}>Logout</Button>
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
