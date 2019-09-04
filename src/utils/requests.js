import axios from "axios"

let API;

if(window.location.href.includes('localhost')){
    API = `http://localhost:4000`
} else{
    API = `https://staging-smartkids.herokuapp.com`
}

const query = (query, params) => {
    // make request to the server
    return new Promise(async (resolve, reject) => {
        try {
            const { data: { data } } = await axios.post(`${API}/graph`, {
                query
            })

            resolve(data)
        } catch (error) {
            reject(error.response.data.errors)
        }
    })
}

const mutate = (query, variables) => {
    // make request to the server
    return new Promise(async (resolve, reject) => {
        try {
            const { data: { data } } = await axios.post(`${API}/graph`, {
                query,
                variables
            })

            resolve(data)
        } catch (error) {
            reject(error.response.data.errors)
        }
    })
}

export {
    query,
    mutate
}