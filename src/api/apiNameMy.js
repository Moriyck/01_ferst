import * as axios from 'axios'

const nameMyInstance = axios.create({
    withCredentials: true,
    baseURL: `http://127.0.0.1:5984/`
})

export const nameMyPasswordAPI = {

    getNameMy() {
        return nameMyInstance.get(`_session`)
            .then(response => {
                return response.data
            })
    },

    postNameMyPassword(nameMy, password) {

        return nameMyInstance.post(`_session`, { name: nameMy, password: password })
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },

    deleteNameMyPassword() {
        return nameMyInstance.delete(`_session`)

    }
}

