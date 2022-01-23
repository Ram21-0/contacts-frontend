import axios from "axios"

function getAuthHeader(user) {
    return {
        headers: {
            "Authorization" : `Bearer ` + user.jwt
        }
    }
}

export function axiosGetRequest(path,user,onSuccess,onError) {
    axios.get(
        path, 
        getAuthHeader(user)
    ).then(onSuccess)
    .catch(onError)
}

export function axiosPostRequest(path,user,data,onSuccess,onError) {
    axios.post(
        path,
        data, 
        getAuthHeader(user)
    ).then(onSuccess)
    .catch(onError)
}

export function axiosPutRequest(path,user,data,onSuccess,onError) {
    axios.put(
        path,
        data, 
        getAuthHeader(user)
    ).then(onSuccess)
    .catch(onError)
}

export function axiosPatchRequest(path,user,data,onSuccess,onError) {
    axios.patch(
        path,
        data,        
        getAuthHeader(user)
    ).then(onSuccess)
    .catch(onError)
}

export function axiosDeleteRequest(path,user,onSuccess,onError) {
    axios.delete(
        path,        
        getAuthHeader(user)
    ).then(onSuccess)
    .catch(onError)
}

export function axiosAuthenticateRequest(path,data,onSuccess,onError) {
    axios.post(
        path,
        data
    ).then(onSuccess)
    .catch(onError)
}