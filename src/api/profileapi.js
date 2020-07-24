import *as axios from 'axios'

const couchdbInstance = axios.create({
    withCredentials: true,
    baseURL: `http://127.0.0.1:5984/`
})

export const profileAPI = {
    getProfile(userId) {
        return couchdbInstance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },

    updateStatus(userId, doc, status, date) {
        return couchdbInstance.put(`profile/${userId}`, { ...doc, status: status, date: date })
    },

    getPosts(userId) {
        return couchdbInstance.get(`posts/_design/posts/_view/myPosts?include_docs=true&inclusive_end=true&start_key="${userId}"&end_key="${userId}"&descending=true`)
            .then(response => {
                return response.data
            })
    },

    postPost(nameMy, message) {
        return couchdbInstance.post(`posts/`, { author: nameMy, message: message, likesCount: 0 })
    }
}