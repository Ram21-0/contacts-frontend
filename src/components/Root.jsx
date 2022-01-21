import React from 'react';
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux';

function Root(props) {
    console.log(props);
    return (
        
        <div>
            <Navigate to={
                props.user.loggedIn ? "/contacts" : "/login"
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
