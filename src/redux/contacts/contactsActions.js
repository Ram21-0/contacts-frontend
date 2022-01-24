import { DELETE_CONTACT, INSERT_CONTACT, SET_CONTACTS, UPDATE_CONTACT } from "./contactsActionTypes.js";
import { axiosGetRequest } from "../../axios/axios.js";
import { CONTACTS_PATH } from "../../axios/endpoints.js";
import { handleErrors } from "../../axios/errors.js";

export const fetchContacts = (user) => {

    return (dispatch) => {
        axiosGetRequest(
            CONTACTS_PATH,
            user,
            (response) => { 
                dispatch(setContactsAction(response.data)) 
            },
            (error) => { 
                handleErrors(error) 
            }
        )
    }
}

export const insertContact = (contact) => {
    return (dispatch) => {
        dispatch(insertContactAction(contact))
    }
}

export const updateContact = (contact) => {
    return (dispatch) => {
        dispatch(updateContactAction(contact))
    }
}

export const deleteContact = (contact,user) => {

    return (dispatch) => {
        dispatch(deleteContactAction(contact))
    }
}

export const setContactsAction = (contacts) => {
    return {
        type: SET_CONTACTS,
        payload: contacts
    }
}

export const insertContactAction = (contact) => {
    return {
        type: INSERT_CONTACT,
        payload: contact
    }
}

export const updateContactAction = (contact) => {
    return {
        type: UPDATE_CONTACT,
        payload: contact
    }
}

export const deleteContactAction = (contact) => {
    return {
        type: DELETE_CONTACT,
        payload: contact
    }
}