import * as axios from 'axios'
import { baseUrlLocalCouchDb } from './API'

const nameMyInstance = axios.create({
    withCredentials: true,
    baseURL: baseUrlLocalCouchDb
})

export const nameMyPasswordAPI = {

    putRegistrUserNew(newUserName, password) {

        return nameMyInstance.put(`_users/org.couchdb.user:${newUserName}`, { name: newUserName, password: password, roles: [], type: "user" })
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },

    getNameMy() {
        return nameMyInstance.get(`_session`)
            .then(response => {
                return response.data
            })
    },

    getInfoNameMy(nameMy) {
        return nameMyInstance.get(`profile/${nameMy}`)
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

