import { ContactMailRounded } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { fetchContacts } from '../../redux/reducerIndex'

import Contact from "./Contact"
import ContactListItem from './ContactListItem'

function ContactListview(props) { 

    const fetchAllContactsFunc = props.fetchAllContacts

    useEffect(() => {
        fetchAllContactsFunc()
    }, [])

    console.log(props.contacts.contacts)

    return (
        <div>
            {
                Object.keys(props.contacts.contacts).map( 
                    contactId => 
                        <div>
                            <ContactListItem contact={props.contacts.contacts[contactId]}/> 
                        </div>
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllContacts: () => dispatch(fetchContacts())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactListview)