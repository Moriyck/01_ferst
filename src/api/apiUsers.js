import *as axios from 'axios'
import { baseUrlLocalCouchDb } from './API'

const couchdbInstance = axios.create({
    withCredentials: true,
    baseURL: baseUrlLocalCouchDb
})

export const usersAPI = {
    getUsers(pageSaze, skipSaze) {
        return couchdbInstance.get(`users/_all_docs?include_docs=true&limit=${pageSaze}&skip=${skipSaze}`)
            .then(response => {
                return response.data
            })
    },

    getUsersFollow(userId) {
        return couchdbInstance.get(`follow/_design/MyDocument/_view/allMyDocuments?include_docs=true&inclusive_end=true&start_key="${userId}"&end_key="${userId}"`)
            .then(response => {
                return response.data.rows
            })
    },

    deleteFollow(userId, revFollow) {
        return couchdbInstance.delete(`follow/${userId}?rev=${revFollow}`)
    },

    postFollow(userId, nameMy) {
        return couchdbInstance.post(`follow/`, { nameMy: nameMy, followName: userId })
    }
}