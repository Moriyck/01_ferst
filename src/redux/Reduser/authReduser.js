import { nameMyPasswordAPI, nameMyAPI } from "../../api/apiNameMy"
import { stopSubmit } from "redux-form"

const SET_AUTH_USER = 'SET_AUTH_USER'
const TOGAL_IS_FECHING = 'TOGAL_IS_FECHING'

let initialState = {
    name: null,
    isAuth: false,
    isFetching: true
}

const authReduser = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH_USER:
            {
                return {
                    ...state,
                    name: action.name,
                    isAuth: true
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

export const setAuthUser = (name) => ({ type: SET_AUTH_USER, name })
export const totalIsFetchin = (isFetching) => ({ type: TOGAL_IS_FECHING, isFetching })

export const postNameMyPassword = (nameMy, password) => {
    return (dispatch) => {
        nameMyPasswordAPI.postNameMyPassword(nameMy, password)
            .then(response => {
                if (response.status === 200) {
                    dispatch(setAuthUser(response.data.name))
                }
                else {
                    dispatch(stopSubmit('login', { _error: response.data.error + " " + response.data.reason }))
                }
            })
    }
}

export const deleteNameMyPassword = () => {
    return (dispatch) => {
        nameMyPasswordAPI.deleteNameMyPassword()
        dispatch(setAuthUser(null))
    }
}


export const getNameMy = () => {
    return (dispatch) => {
        dispatch(totalIsFetchin(true))
        nameMyPasswordAPI.getNameMy().then(data => {
            dispatch(totalIsFetchin(false))
            dispatch(setAuthUser(data.userCtx.name))
        })
    }
}

export default authReduser