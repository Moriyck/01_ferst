import { profileAPI } from "../../api/apiProfile"


const SET_PROFIL = 'SET_PROFIL'
const OBSOLETE_UPDATE_STATUS = 'OBSOLETE_UPDATE_STATUS'
const SET_USERS_POSTS = 'SET_USERS_POSTS'
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    posts: [],
    profil: [],
    newPostText: ''
}


const profilReduser = (state = initialState, action) => {
    switch (action.type) {

        case SET_USERS_POSTS:
            return {
                ...state,
                posts: action.posts
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

        default:
            return state
    }
}

export const setProfil = (profil) => ({ type: SET_PROFIL, profil })
export const obsoleteUpdateStatus = (status) => ({ type: OBSOLETE_UPDATE_STATUS, status })
export const setUsersPosts = (posts) => ({ type: SET_USERS_POSTS, posts })
export const addPost = (userId) => ({ type: ADD_POST, userId })
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text })
export const totalIsFetchin = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const getProfile = (userId, nameMy) => {
    return (dispatch) => {
        dispatch(totalIsFetchin(true))
        profileAPI.getProfile(userId, nameMy).then(data => {
            dispatch(setProfil(data))
        })
    }
}

export const updateStatus = (userId, doc, status, date) => {
    return (dispatch) => {
        dispatch(obsoleteUpdateStatus(status))
        profileAPI.updateStatus(userId, doc, status, date)
    }
}

export const getPosts = (userId) => {
    return (dispatch) => {
        profileAPI.getPosts(userId).then(data => {
            dispatch(setUsersPosts(data.rows))
        })
    }
}

export const postPost = (userId, message) => {
    return (dispatch) => {
        profileAPI.postPost(userId, message).then(data => {
            dispatch(addPost(userId))
        })

    }
}

export default profilReduser