import React from 'react'

import { connect } from "react-redux"
import Header from './common/Header.jsx';
import InformationCard from './common/InformationCard.jsx';

function UserProfile(props) {

    const user = props.user.user

    console.log(props.user.user)

    const dataValues = [
        { label: "Address", value: user.address },
        { label: "Date of Birth", value: user.dob }
    ]
    
    return (
        <div className='profile-page'>

            <Header slassName="profile-top" title="Profile" />

            <InformationCard 
                name={user.name}
                email={user.userId}
                phoneNo={user.phoneNo}
                dataValues={dataValues} />
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

    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserProfile)
