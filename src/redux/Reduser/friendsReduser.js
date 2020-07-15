const TO_FOLLOW = 'TO_FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'
const SETCURRONTPAGE = 'SETCURRONTPAGE'
const SETTOTALROWS = 'SETTOTALROWS'
const TOGAL_IS_FECHING = 'TOGAL_IS_FECHING'

let initialState = {

    users: [],
    pageSaze: 3,
    totalPageCount: 0,
    currontPage: 1,
    isFetching: false,

}

const friendsReduser = (state = initialState, action) => {

    switch (action.type) {
        case TO_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            value: { ...u.value, follow: true }
                        }
                    }
                    return u
                })
            }

        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            value: { ...u.value, follow: false }
                        }
                    }
                    return u
                })
            }

        case SET_USERS:
            {
                return {
                    ...state,
                    users: action.users
                }
            }

        case SETCURRONTPAGE:
            {
                return {
                    ...state,
                    currontPage: action.currontPage
                }
            }

        case SETTOTALROWS:
            {
                return {
                    ...state,
                    totalPageCount: action.totalRows
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
export const changeToFollow = (userId) => ({ type: TO_FOLLOW, userId })
export const changeToUnFollow = (userId) => ({ type: UN_FOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrontPage = (currontPage) => ({ type: SETCURRONTPAGE, currontPage })
export const setTotalRows = (totalRows) => ({ type: SETTOTALROWS, totalRows })
export const totalIsFetchin = (isFetching) => ({ type: TOGAL_IS_FECHING, isFetching })

export default friendsReduser