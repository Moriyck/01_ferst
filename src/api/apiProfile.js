import *as axios from 'axios'
import { baseUrlLocalCouchDb } from './API'

const couchdbInstance = axios.create({
    withCredentials: true,
    baseURL: baseUrlLocalCouchDb
})

export const profileAPI = {
    getProfile(userId) {
        return couchdbInstance.get(`profile/${userId}`)
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },

    updateProfile(userId, propername, surname, birthdate) {
        return couchdbInstance.put(`profile/${userId}`, { name: propername, surname: surname, birthdate: birthdate })
            .then(response => {
                debugger
                return response
            })
            .catch(error => {
                return error.response
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
    },

    fileTheDownload(userId, rev, faileData) {
        const formData = new FormData
        formData.append("image", faileData)
        return couchdbInstance.put(`profile/${userId}/${faileData.name}?rev=${rev}`, faileData, { headers: { 'Content-Type': `${faileData.type}` } })
    }
}