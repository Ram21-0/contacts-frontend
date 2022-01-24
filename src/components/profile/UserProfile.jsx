import React, {useEffect} from 'react'

import { connect } from "react-redux"

import Header from '../common/Header'
import InformationCard from '../common/InformationCard'
import "./userProfile.css"

import { useNavigate } from 'react-router-dom'

function UserProfile(props) {

    const navigate = useNavigate()

    useEffect(() => {
        if(!props.user.user) {
            navigate("/login") 
        }
    }, [])

    const user = props.user.user || {}

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
