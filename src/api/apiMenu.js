import *as axios from 'axios'
import { baseUrlLocalCouchDb } from './API'

const couchdbInstance = axios.create({
    withCredentials: true,
    baseURL: baseUrlLocalCouchDb
})

export const menuAPI = {

    getMenu(menuId) {
        return couchdbInstance.get(`all_menu/${menuId}`)
            .then(response => {
                return response.data
            })
    },

    getMenuSettting(menuId) {
        return couchdbInstance.get(`all_menu/${menuId}`)
            .then(response => {
                return response.data
            })
    }
}