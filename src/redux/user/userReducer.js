import { LOGIN, LOGOUT } from './userActionTypes.js'

// const initialState = {
//     loggedIn: false,
//     user: null,
//     jwt: null
// }

function getInitialState() {
    const localData = localStorage.getItem("user")
    if(localData) return JSON.parse(localData)
    return {
        loggedIn: false,
        user: null,
        jwt: null
    }
}
const initialState = getInitialState()

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case LOGIN: 
            localStorage.setItem("user",
                JSON.stringify({
                    jwt: action.payload.jwt,
                    user: action.payload.user,
                    loggedIn: true
                })
            )
            console.log("payload",action.payload)
            console.log("action.payload.uaer",action.payload.user);
            return {
                ...state,
                loggedIn: true,
                user: action.payload.user,
                jwt: action.payload.jwt
            }

        case LOGOUT: 
            localStorage.removeItem("user")
            return {
                ...state,
                loggedIn: false,
                user: null
            }
        
        default: return state
    }
}

export default reducer

