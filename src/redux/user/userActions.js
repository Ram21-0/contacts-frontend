import { LOGIN, LOGOUT } from "./userActionTypes.js";
// import axios from "axios"

export const loginCurrentUser = (user) => {
    return (dispatch) => {
        dispatch(login(user))
    }
}

export const logoutCurrentUser = (user) => {
    return (dispatch) => {
        dispatch(logout())
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const login = (user) => {
    return {
        type: LOGIN,
        payload: user
    }
}