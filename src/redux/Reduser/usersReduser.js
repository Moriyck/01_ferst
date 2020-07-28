import { usersAPI } from "../../api/apiUsers"

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
    pageSaze: 3,
    totalPageCount: 0,
    currontPage: 1,
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
            if (action.usersFollow.length > 0) {
                let lengthCount = action.usersFollow.length
                let usersFollow = action.usersFollow
                for (let i = 0; i <= lengthCount; i++) {
                    let userFollow = usersFollow[i]
                    return {
                        ...state,
                        users: state.users.map(u => {
                            if (userFollow.id === u.id)
                                return {
                                    ...u,
                                    doc: {
                                        ...u.doc, follow: true, revFollow: userFollow.doc._rev, nameMy: userFollow.doc.nameMy
                                    }
                                }
                            return u
                        })
                    }
                }
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
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        default:
            return state
    }

}
export const changeToFollow = (userId) => ({ type: TO_FOLLOW, userId })
export const changeToUnFollow = (userId) => ({ type: TO_UN_FOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setUsersFollow = (usersFollow) => ({ type: SET_USERS_FOLLOW, usersFollow })
export const setCurrontPage = (currontPage) => ({ type: SET_CURRONT_PAGE, currontPage })
export const setTotalRows = (totalRows) => ({ type: SET_TOTAL_ROWS, totalRows })
export const totalIsFetchin = (isFetching) => ({ type: TOGAL_IS_FECHING, isFetching })
export const totalIsFetchinProgress = (followingInProgress, userId) => ({ type: TOGAL_IS_FECHING_PROGRESS, followingInProgress, userId })

export const getUsers = (pageSaze, currontPage) => {
    return (dispatch) => {
        dispatch(totalIsFetchin(true))
        let skipSaze = (pageSaze * currontPage) - pageSaze
        usersAPI.getUsers(pageSaze, skipSaze).then(data => {
            dispatch(totalIsFetchin(false))
            dispatch(setUsers(data.rows))
            dispatch(setTotalRows(data.total_rows))
            dispatch(setCurrontPage(currontPage))
        })

        usersAPI.getUsersFollow().then(data => {
            dispatch(setUsersFollow(data.rows))
        })

    }
}

export const followThunk = (userId, revFollow) => {
    return (dispatch) => {
        dispatch(totalIsFetchinProgress(true, userId))
        usersAPI.deleteFollow(userId, revFollow).then(data => {
            dispatch(totalIsFetchinProgress(false, userId))
            if (data.ok === true)
                dispatch(totalIsFetchinProgress(true, userId))
            dispatch(changeToUnFollow(userId))
        })
    }
}

export const followUnThunk = (userId, nameMy) => {
    return (dispatch) => {
        dispatch(totalIsFetchinProgress(true, userId))
        usersAPI.putFollow(userId, nameMy).then(data => {
            dispatch(totalIsFetchinProgress(false, userId))
            if (data.ok === true)
                dispatch(totalIsFetchinProgress(true, userId))
            dispatch(changeToFollow(userId))
        })
    }
}

export default usersReduser