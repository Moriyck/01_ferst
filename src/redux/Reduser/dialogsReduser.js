import { dialogsAPI } from "../../api/apiDialogs"

const SEND_MESSAGE = 'SEND_MESSAGE'
const SET_MY_DIALOGS = 'SET_MY_DIALOGS'

let initialState = {

    dialogs: []
}

const dialogsReduser = (state = initialState, action) => {

    switch (action.type) {
        case SET_MY_DIALOGS:
            return {
                ...state,
                dialogs: action.dialogs
            }

        case SEND_MESSAGE:
            return {
                ...state,
                ...state.dialogs,
                messages: [...action.doc.messages,
                {
                    author: action.author,
                    message: action.message
                }
                ]
            }

        default:
            return state

    }
}

export const setMyDialods = (dialogs) => ({ type: SET_MY_DIALOGS, dialogs })
export const sendMessage = (doc, author, message) => ({ type: SEND_MESSAGE, doc, author, message })

export const getMyDialogs = (nameMy) =>
    async (dispatch) => {
        const data = await dialogsAPI.getMyDialogs(nameMy)
        dispatch(setMyDialods(data.rows))
    }

export const putMessageDialogs = (idDialogs, doc, author, message) =>
    async (dispatch) => {
        dialogsAPI.putMessageDialogs(idDialogs, doc, author, message)
        dispatch(sendMessage(doc, author, message))
    }

export default dialogsReduser