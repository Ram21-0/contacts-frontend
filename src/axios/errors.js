export function handleErrors(error) {
    console.log(error.response) 
    switch(error.response.status) {
        case 401: 
            alert("Invalid credentials")
            return
        case 409:
            alert(error.response.data)
            return
        case 401:
            alert("Unauthorized request. Kindly login!")
            return
        case 404:
            alert("Resource not found")
            return
        default:
            alert("An error occurred")
    }
}