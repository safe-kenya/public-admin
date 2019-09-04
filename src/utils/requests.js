import axios from "axios"

const API = `http://localhost:4000`

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

const mutate = (query, params) => {
    // make request to the server
    return new Promise((resolve, reject) => {
        resolve()
    })
}

export {
    query,
    mutate
}