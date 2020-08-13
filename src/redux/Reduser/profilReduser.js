import { profileAPI } from "../../api/apiProfile"

const SET_PROFIL = 'SET_PROFIL'
const SHOW_ERROR = 'SHOW_ERROR'
const OBSOLETE_UPDATE_STATUS = 'OBSOLETE_UPDATE_STATUS'
const SET_USERS_POSTS = 'SET_USERS_POSTS'
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const ADD_IMAGE = 'ADD_IMAGE'

let initialState = {
    posts: [],
    profil: [],
    newPostText: '',
    error: []
}


const profilReduser = (state = initialState, action) => {
    switch (action.type) {

        case SET_USERS_POSTS:
            return {
                ...state,
                posts: action.posts
            }

        case SHOW_ERROR:
            return {
                ...state,
                error: action.error
            }

        case ADD_POST:
            let text = state.newPostText
            return {
                ...state,
                posts: [...state.posts,
                {
                    doc: {
                        id: action.userId,
                        message: text,
                        likesCount: 10
                    }
                }]
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                posts: [...state.posts],
                newPostText: action.text

            }

        case SET_PROFIL:
            {
                return {
                    ...state,
                    profil: action.profil
                }
            }

        case OBSOLETE_UPDATE_STATUS:
            return {
                ...state,
                ...state.profil,
                status: action.status


            }

        case TOGGLE_IS_FETCHING:
            {
                return {
                    ...state,
                    isFetching: action.isFetching
                }
            }

        case ADD_IMAGE:
            debugger
            {
                return {
                    ...state,
                    profil: { ...state.profil, avatar: action.avatar }
                }
            }

        default:
            return state
    }
}

export const setProfil = (profil) => ({ type: SET_PROFIL, profil })
export const showError = (error) => ({ type: SHOW_ERROR, error })
export const obsoleteUpdateStatus = (status) => ({ type: OBSOLETE_UPDATE_STATUS, status })
export const setUsersPosts = (posts) => ({ type: SET_USERS_POSTS, posts })
export const addPost = (userId) => ({ type: ADD_POST, userId })
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, text })
export const totalIsFetchin = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const addImage = (avatar) => ({ type: ADD_IMAGE, avatar })

export const getProfile = (userId) =>
    async (dispatch) => {
        dispatch(totalIsFetchin(true))
        profileAPI.getProfile(userId)
            .then(response => {
                if (response.status === 200) {
                    dispatch(setProfil(response.data))
                }
                else {
                    dispatch(showError(response.data.error))
                }
            })
    }

export const updateProfile = (userId, propername, surname, birthdate) =>
    async (dispatch) => {

        profileAPI.updateProfile(userId, propername, surname, birthdate)
            .then(response => {
                if (response.status === 200) {
                    dispatch(setProfil(userId, propername, surname, birthdate))
                }
                else {
                    dispatch(showError(response.data.error))
                }
            })
    }

export const updateStatus = (userId, doc, status, date) =>
    async (dispatch) => {
        dispatch(obsoleteUpdateStatus(status))
        profileAPI.updateStatus(userId, doc, status, date)
    }

export const getPosts = (userId) =>
    async (dispatch) => {
        const data = await profileAPI.getPosts(userId)
        dispatch(setUsersPosts(data.rows))
    }

export const postPost = (userId, message) =>
    async (dispatch) => {
        profileAPI.postPost(userId, message)
        dispatch(addPost(userId))
    }

export const fileTheDownload = (userId, rev, faileData) =>
    async (dispatch) => {
        profileAPI.fileTheDownload(userId, rev, faileData)
        dispatch(addImage(faileData.name))
    }

export default profilReduser