import *as axios from 'axios'

const couchdbInstance = axios.create({
    withCredentials: true,
    baseURL: `http://127.0.0.1:5984/`
})

export const usersAPI = {
    getUsers(pageSaze, skipSaze) {
        return couchdbInstance.get(`users/_all_docs?include_docs=true&limit=${pageSaze}&skip=${skipSaze}`)
            .then(response => {
                return response.data
            })
    },

    getUsersFollow() {
        return couchdbInstance.get(`follow/_all_docs?include_docs=true`)
            .then(response => {
                return response.data
            })
    },

    deleteFollow(userId, revFollow) {
        return couchdbInstance.delete(`follow/${userId}?rev=${revFollow}`)
    },

    postFollow(userId, nameMy) {
        return couchdbInstance.post(`follow/${userId}`, { nameMy: nameMy, type: 'follow' })
    }
}