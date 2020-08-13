import { usersAPI } from "../../api/apiUsers"
//import { updateObjectInArray } from "../../utils/validators/objectHelper"

const TO_FOLLOW = 'TO_FOLLOW'
const TO_UN_FOLLOW = 'TO_UN_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_USERS_FOLLOW = 'SET_USERS_FOLLOW'
const SET_CURRONT_PAGE = 'SET_CURRONT_PAGE'
const SET_TOTAL_ROWS = 'SET_TOTAL_ROWS'
const TOGAL_IS_FECHING = 'TOGAL_IS_FECHING'
const TOGAL_IS_FECHING_PROGRESS = 'TOGAL_IS_FECHING_PROGRESS'

let initialState = {

    users: [],

    // paginator
    pageSaze: 3,
    totalPageCount: 0,
    currontPage: 1,

    //
    isFetching: true,
    followingInProgress: []
}

const usersReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case TO_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            doc: { ...u.doc, follow: true }
                        }
                    }
                    return u
                })
            }

        case TO_UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            doc: { ...u.doc, follow: false }
                        }
                    }
                    return u
                })
            }

        case SET_USERS_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.data && u.id === action.data.key) {
                        return {
                            ...u,
                            doc: { ...u.doc, follow: true, revFollow: action.data.doc._rev, idFollow: action.data.doc._id }
                        }
                    }
                    return u
                })
            }

        case SET_CURRONT_PAGE:
            return {
                ...state,
                currontPage: action.currontPage
            }

        case SET_TOTAL_ROWS:
            return {
                ...state,
                totalPageCount: action.totalRows
            }

        case TOGAL_IS_FECHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case TOGAL_IS_FECHING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state
    }
}

export const changeToFollow = (userId) => ({ type: TO_FOLLOW, userId })
export const changeToUnFollow = (userId) => ({ type: TO_UN_FOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setUsersFollow = (data) => ({ type: SET_USERS_FOLLOW, data })
export const setCurrontPage = (currontPage) => ({ type: SET_CURRONT_PAGE, currontPage })
export const setTotalRows = (totalRows) => ({ type: SET_TOTAL_ROWS, totalRows })
export const totalIsFetchin = (isFetching) => ({ type: TOGAL_IS_FECHING, isFetching })
export const totalIsFetchinProgress = (followingInProgress, userId) => ({ type: TOGAL_IS_FECHING_PROGRESS, followingInProgress, userId })

export const getUsers = (pageSaze, currontPage) =>
    async (dispatch) => {
        dispatch(totalIsFetchin(true))
        let skipSaze = (pageSaze * currontPage) - pageSaze
        const data = await usersAPI.getUsers(pageSaze, skipSaze)
        if (data) {
            dispatch(totalIsFetchin(false))
            dispatch(setUsers(data.rows))
            data.rows.map(u => {
                usersAPI.getUsersFollow(u.id)
                    .then(data => {
                        if (data) {
                            dispatch(setUsersFollow(data[0]))
                        }
                    })
            })
            dispatch(setTotalRows(data.total_rows))
            dispatch(setCurrontPage(currontPage))
        }
    }

export const followUnThunk = (userId, idFollow, revFollow) =>
    async (dispatch) => {
        dispatch(totalIsFetchinProgress(true, userId))
        usersAPI.deleteFollow(idFollow, revFollow)
        dispatch(totalIsFetchinProgress(false, userId))
        dispatch(changeToUnFollow(userId))
    }

export const followThunk = (userId, nameMy) =>
    async (dispatch) => {
        dispatch(totalIsFetchinProgress(true, userId))
        usersAPI.postFollow(userId, nameMy)
        dispatch(totalIsFetchinProgress(false, userId))
        dispatch(changeToFollow(userId))
    }

export default usersReduser