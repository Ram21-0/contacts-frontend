import { combineReducers } from 'redux'

import contactsReducer from "./contacts/contactsReducer"
import userReducer from "./user/userReducer"

const rootReducer = combineReducers({
    contacts: contactsReducer,
    user: userReducer
})

export default rootReducer