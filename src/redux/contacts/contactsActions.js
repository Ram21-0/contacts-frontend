import { SET_CONTACTS } from "./contactsActionTypes.js";
import axios from "axios"

export const fetchContacts = () => {
    return (dispatch) => {
        axios.get("http://localhost:8080/contacts")
        .then(response => {
            console.log("data",response.data);
            dispatch(setContacts(response.data))
        })
        .catch(err => console.log("err",err))
        
        // , (response,error) => {
        //     console.log("hi");
        //     if(error) {
        //         console.log("error", error)
        //     } else {
        //         console.log("data", response.data);
        //         dispatch(getAllContacts(response.data))
        //     }
        // })
    }
}

export const setContacts = (contacts) => {
    return {
        type: SET_CONTACTS,
        payload: contacts
    }
}