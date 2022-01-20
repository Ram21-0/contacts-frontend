import { ContactMailRounded } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { fetchContacts } from '../../redux/reducerIndex'
import { useNavigate } from 'react-router-dom'

import Contact from "./Contact"
import ContactListItem from './ContactListItem'

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import './css/contactListview.css'

function ContactListview(props) { 

    const navigate = useNavigate()

    function addContactHandler() {
        navigate("/contacts/create")
    }

    return (
        <div className='contact-list-container'>
            {
                props.list.map( 
                    contact => 
                        <div>
                            <ContactListItem contact={contact}/> 
                        </div>
                )
            }


                <Fab className="fab" color="primary" variant="extended" onClick={addContactHandler}>
                    <AddIcon sx={{ mr: 1 }} />
                    {"Add Contact"}
                </Fab>

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