import *as axios from 'axios'

const nameMyInstance = axios.create({
    withCredentials: true,
    baseURL: `http://127.0.0.1:5984/`
})

export const nameMyPasswordAPI = {
    putNameMyPassword(nameMy, password) {
        return nameMyInstance.post(`_session`, { name: nameMy, password: password })
    }
}

export const nameMyAPI = {
    getNameMy() {
        return nameMyInstance.get(`_session`)
            .then(response => {
                return response.data
            })
    }
}