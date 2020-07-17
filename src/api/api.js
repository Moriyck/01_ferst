import *as axios from 'axios'

const nameMyInstance = axios.create({
    withCredentials: true,
    baseURL: `http://127.0.0.1:5984/`
})

export const nameMyAPI = {
    getNameMy() {
        return nameMyInstance.get(`_session`)
            .then(response => {
                return response.data
            })
    }

}

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
    },

    putFollow(userId, nameMy) {
        return couchdbInstance.put(`follow/${userId}`, { nameMy: nameMy, type: 'follow' })
    },

    getUsersProfile(userId) {
        return couchdbInstance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },

    getUsersPosts(userId) {
        return couchdbInstance.get(`posts/_design/posts/_view/myPosts?include_docs=true&inclusive_end=true&start_key="${userId}"&end_key="${userId}"`)
            .then(response => {
                return response.data
            })
    },

    postUsersPost(nameMy, message) {
        return couchdbInstance.post(`posts/`, { author: nameMy, message: message, likesCount: 0 })
    }

}