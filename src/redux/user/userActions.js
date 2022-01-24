import { LOGIN, LOGOUT } from "./userActionTypes.js";

export const loginCurrentUser = (data) => {

    return (dispatch) => {
        dispatch(login({
            user: data.user,
            jwt: data.jwt
        }))
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