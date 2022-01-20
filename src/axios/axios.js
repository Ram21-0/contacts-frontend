import axios from "axios"

const root = "http://localhost:3000"

const axiosObject = {

}

function get(path,userState,body) {
    axios.get(root + path, {
        header
    })
}