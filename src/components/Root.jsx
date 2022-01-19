import React from 'react';
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux';

function Root(props) {
    console.log(props.user.user.loggedIn);
    return (
        
        <div>
            <Navigate to={
                props.user.user.loggedIn ? "/contacts" : "/home"
            }/>
        </div>
  )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
} 

export default connect(mapStateToProps)(Root);
