import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { fetchContacts } from '../redux/reducerIndex'

function ContactsViewer(props) {

    useEffect(() => {
        props.fetchAllContacts()
    }, [])

    console.log(props.contacts.contacts)

    return (
        <div>
            {
                
                props.contacts.contacts.map(contact => <p key={contact.contactId}>{contact.name}</p>)
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