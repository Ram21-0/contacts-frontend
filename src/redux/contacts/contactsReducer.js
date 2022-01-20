import { DELETE_CONTACT, INSERT_CONTACT, SET_CONTACTS, UPDATE_CONTACT } from './contactsActionTypes.js'

const initialState = {
    contacts: {}
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_CONTACTS: 
            let newStateValue = {}
            action.payload.forEach(contact => newStateValue[contact.contactId] = contact)
            return {
                ...state,
                contacts: newStateValue
            }

        case INSERT_CONTACT:
            newStateValue = state.contacts
            let newContact = action.payload
            newStateValue[newContact.contactId] = newContact
            return {
                ...state,
                contacts: newStateValue
            }

        case UPDATE_CONTACT:
            newStateValue = state.contacts
            newContact = action.payload
            newStateValue[newContact.contactId] = newContact
            return {
                ...state,
                contacts: newStateValue
            }


        case DELETE_CONTACT:
            // newStateValue = state.contacts
            // newContact = action.payload
            // newStateValue[newContact.contactId] = contact
            return {
                ...state
                // contacts: newStateValue
            }
        
        default: return state
    }
}

export default reducer

