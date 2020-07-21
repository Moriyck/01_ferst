import { usersAPI } from "../../api/api"

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'
const SET_MY_DIALOGS = 'SET_MY_DIALOGS'

let initialState = {

    dialogs: [],
    messages: [],
    newMessageBody: ''

}

const dialogsReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_MY_DIALOGS:
            return {
                ...state,
                dialogs: action.dialogs
            }

        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, idDialogs: 1, message: body }]
            }

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                messages: [...state.messages],
                newMessageBody: action.body
            }

        default:
            return state

    }
}

export const setMyDialods = (dialogs) => ({ type: SET_MY_DIALOGS, dialogs })
export const sendMessage = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBody = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body })

export const getMyDialogs = (nameMy) => {
    return (dispatch) => {
        usersAPI.getMyDialogs(nameMy).then(data => {
            dispatch(setMyDialods(data.rows))
        })
    }
}

export default dialogsReduser