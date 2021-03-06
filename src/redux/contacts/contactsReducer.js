import { DELETE_CONTACT, INSERT_CONTACT, SET_CONTACTS, UPDATE_CONTACT } from './contactsActionTypes.js'

const initialState = {
    contacts: {}
}

const reducer = (state=initialState, action) => {

    let mContact;
    let newStateValue;

    switch(action.type) {
        case SET_CONTACTS: 
            newStateValue = {}
            action.payload.forEach(contact => newStateValue[contact.contactId] = contact)
            return {
                ...state,
                contacts: newStateValue,
                contactsInDisplay: newStateValue
            }

        case INSERT_CONTACT:
            newStateValue = state.contacts
            mContact = action.payload
            newStateValue[mContact.contactId] = mContact
            return {
                ...state,
                contacts: newStateValue,
                contactsInDisplay: newStateValue
            }

        case UPDATE_CONTACT:
            newStateValue = state.contacts
            mContact = action.payload
            newStateValue[mContact.contactId] = mContact
            return {
                ...state,
                contacts: newStateValue,
                contactsInDisplay: newStateValue
            }


        case DELETE_CONTACT:
            newStateValue = state.contacts
            mContact = action.payload
            delete newStateValue[mContact.contactId]
            return {
                ...state,
                contacts: newStateValue,
                contactsInDisplay: newStateValue
            }
        
        default: return state
    }
}

export default reducer

