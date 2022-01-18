import { SET_CONTACTS } from './contactsActionTypes.js'

const initialState = {
    contacts: []
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_CONTACTS: 
            return {
                ...state,
                contacts: action.payload
            }
        
        default: return state
    }
}

export default reducer

