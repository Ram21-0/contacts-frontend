import { LOGIN, LOGOUT } from "./userActionTypes.js";
import axios from "axios"

export const loginCurrentUser = (data) => {

    return (dispatch) => {
        console.log("useractions",data);
        dispatch(login({
            // user: data.user,
            user: data.user,
            jwt: data.jwt
        }))
    }

    // return (dispatch) => {

    //     // console.log("data in actions",data)

    //     axios.post("http://localhost:8080/authenticate", {
    //         userId: data.userId,
    //         password: data.password
    //     }).then(response => {
    //         console.log("response.data.jwt",response.data.jwt)
    //         dispatch(login({
    //             user: {},
    //             jwt: response.data.jwt
    //         }))
    //     }).catch(error => {
    //         console.log(error)
    //         alert("Invalid credentials")
    //     })
// 
//         
    // }
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