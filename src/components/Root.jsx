import React from 'react';
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux';

function Root(props) {
    return <Navigate to={ props.user.loggedIn ? "/contacts" : "/login" }/>
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
} 

export default connect(mapStateToProps)(Root);
