import *as axios from 'axios'
import { baseUrlLocalCouchDb } from './API'

const couchdbInstance = axios.create({
    withCredentials: true,
    baseURL: baseUrlLocalCouchDb
})

export const dialogsAPI = {
    postMyDialogs(interlocutor, nameMy) {
        return couchdbInstance.post(`dialogs/`, {
            author: nameMy,
            interlocutor: interlocutor,
            messages: []
        })
    },

    putMessageDialogs(idDialogs, doc, author, message) {
        return couchdbInstance.put(`dialogs/${idDialogs}`, {
            ...doc,
            messages: [...doc.messages,
            {
                author: author,
                message: message
            }]
        })
    },

    getMyDialogs(nameMy) {
        return couchdbInstance.get(`dialogs/_design/dialogs/_view/myDialogs?include_docs=true&inclusive_end=true&start_key="${nameMy}"`)
            .then(response => {
                return response.data
            })
    }
}