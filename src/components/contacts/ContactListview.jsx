import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { fetchContacts } from '../../redux/reducerIndex'
import { useNavigate } from 'react-router-dom'

import ContactListItem from './ContactListItem'

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import "./css/contactListview.css"

function ContactListview(props) { 

    const navigate = useNavigate()

    function addContactHandler() {
        navigate("/contacts/create")
    }

    const style = {
        height: '100%',
        width: '100%',
        paddingRight: '5%',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column'
    }

    console.log(props.list);

    return (
        <div style={style}>
        {/* <div className='contactt-list-container'> */}
            {
                props.list.map( 
                    contact => <ContactListItem key={contact.contactId} contact={contact}/> 
                )
            }

            <div className="fab">
            <Fab className="fab" color="primary" variant="extended" onClick={addContactHandler}>
                <AddIcon sx={{ mr: 1 }} />
                {"Add Contact"}
            </Fab>
            </div>
            
                
        </div>
        // </div>
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