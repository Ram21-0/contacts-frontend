import React from 'react'
import { Link } from 'react-router-dom'

import { insertContact } from '../redux/reducerIndex.js';
import { connect } from "react-redux"

function MyProfile(props) {


    console.log(props.user.user)
    
    return (
        <div>
            <Link to="/contacts"> Contacts </Link>
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
        // fetchAllContacts: () => dispatch(fetchContacts())
        insertContact: (contact) => dispatch(insertContact(contact))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MyProfile)
