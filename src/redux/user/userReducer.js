import { LOGIN, LOGOUT } from './userActionTypes.js'

const initialState = {
    loggedIn: false,
    user: null,
    jwt: null
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case LOGIN: 
            console.log(action.payload)
            return {
                ...state,
                loggedIn: true,
                user: action.payload.user,
                jwt: action.payload.jwt
            }

        case LOGOUT: 
            return {
                ...state,
                loggedIn: false,
                user: null
            }
        
        default: return state
    }
}

export default reducer

