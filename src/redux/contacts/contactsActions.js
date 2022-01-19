import { SET_CONTACTS } from "./contactsActionTypes.js";
import axios from "axios"

export const fetchContacts = () => {

    return (dispatch) => {
        dispatch(setContacts(data))
    }

    // return (dispatch) => {
    //     axios.get("http://localhost:8080/contacts")
    //     .then(response => {
    //         console.log("data",response.data);
    //         dispatch(setContacts(response.data))
    //     })
    //     .catch(err => console.log("err",err))
    // }
}

export const setContacts = (contacts) => {
    return {
        type: SET_CONTACTS,
        payload: contacts
    }
}


const data = [
    {
        "contactId": "5555555555",
        "name": "aamir",
        "email": "aamir@flock.com",
        "phoneNo": "5555555555",
        "address": "aamir",
        "score": 0,
        "dob": "2000-10-09T18:30:00.000+00:00"
    },
    {
        "contactId": "1642451663904",
        "name": "Digvijay",
        "email": "a",
        "phoneNo": "123",
        "address": "aa",
        "score": 0,
        "dob": "2000-12-11T18:30:00.000+00:00"
    },
    {
        "contactId": "1111111111",
        "name": "ram",
        "email": "ram@flock.com",
        "phoneNo": "1111111111",
        "address": "ram",
        "score": 0,
        "dob": "2000-10-09T18:30:00.000+00:00"
    },
    {
        "contactId": "1642488952874",
        "name": "sachin tendulkar",
        "email": "a",
        "phoneNo": "999999999",
        "address": "aa",
        "score": 0,
        "dob": "2000-12-11T18:30:00.000+00:00"
    },
    {
        "contactId": "7777777777",
        "name": "tom",
        "email": "tom@flock.com",
        "phoneNo": "7777777777",
        "address": "tom",
        "score": 0,
        "dob": "2000-10-09T18:30:00.000+00:00"
    }
]