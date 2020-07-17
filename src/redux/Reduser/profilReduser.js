import { usersAPI } from "../../api/api"

const SET_PROFIL = 'SET_PROFIL'
const SET_USERS_POSTS = 'SET_USERS_POSTS'
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const TOGAL_IS_FECHING = 'TOGAL_IS_FECHING'

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
                newPostText: '',
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

        case TOGAL_IS_FECHING:
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
export const setUsersPosts = (posts) => ({ type: SET_USERS_POSTS, posts })
export const addPost = (userId) => ({ type: ADD_POST, userId })
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text })
export const totalIsFetchin = (isFetching) => ({ type: TOGAL_IS_FECHING, isFetching })

export const getUsersProfile = (userId, nameMy) => {
    return (dispatch) => {
        dispatch(totalIsFetchin(true))
        usersAPI.getUsersProfile(userId, nameMy).then(data => {
            dispatch(setProfil(data))
        })
    }
}

export const getUsersPosts = (userId) => {
    return (dispatch) => {
        usersAPI.getUsersPosts(userId).then(data => {
            dispatch(setUsersPosts(data.rows))
        })
    }
}

export const postUsersPost = (userId, message) => {
    return (dispatch) => {
        debugger
        usersAPI.postUsersPost(userId, message).then(data => {
            dispatch(addPost(userId))
        })

    }
}

export default profilReduser