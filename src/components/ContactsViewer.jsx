import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { fetchContacts } from '../redux/reducerIndex'

function ContactsViewer({contacts, fetchAllContacts}) {

    useEffect(() => {
        fetchAllContacts()
    }, [])

    console.log(contacts.contacts)

    return (
        <div>
            {
                
                contacts.contacts.map(contact => <p key={contact.contactId}>{contact.name}</p>)
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
)(ContactsViewer)