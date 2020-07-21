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

export default authReduser