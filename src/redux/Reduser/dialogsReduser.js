const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {

    dialogs: [
        { id: 1, name: 'Ruslan', avatar: 'https://yt3.ggpht.com/a/AGF-l7_CxhgKe6ZNB7syEdldsBeNPZYgvJLK2f_N=s900-c-k-c0xffffffff-no-rj-mo' },
        { id: 2, name: 'Dima', avatar: 'https://yt3.ggpht.com/a/AGF-l7_CxhgKe6ZNB7syEdldsBeNPZYgvJLK2f_N=s900-c-k-c0xffffffff-no-rj-mo' },
        { id: 3, name: 'Sasha', avatar: 'https://yt3.ggpht.com/a/AGF-l7_CxhgKe6ZNB7syEdldsBeNPZYgvJLK2f_N=s900-c-k-c0xffffffff-no-rj-mo' },
        { id: 4, name: 'Sveta', avatar: 'https://yt3.ggpht.com/a/AGF-l7_CxhgKe6ZNB7syEdldsBeNPZYgvJLK2f_N=s900-c-k-c0xffffffff-no-rj-mo' },
        { id: 5, name: 'Katya', avatar: 'https://yt3.ggpht.com/a/AGF-l7_CxhgKe6ZNB7syEdldsBeNPZYgvJLK2f_N=s900-c-k-c0xffffffff-no-rj-mo' },
    ],

    user: [
        { id: 1, name: 'Ruslan', avatar: 'https://yt3.ggpht.com/a/AGF-l7_CxhgKe6ZNB7syEdldsBeNPZYgvJLK2f_N=s900-c-k-c0xffffffff-no-rj-mo' },
        { id: 2, name: 'Dima', avatar: 'https://yt3.ggpht.com/a/AGF-l7_CxhgKe6ZNB7syEdldsBeNPZYgvJLK2f_N=s900-c-k-c0xffffffff-no-rj-mo' },
        { id: 3, name: 'Sasha', avatar: 'https://yt3.ggpht.com/a/AGF-l7_CxhgKe6ZNB7syEdldsBeNPZYgvJLK2f_N=s900-c-k-c0xffffffff-no-rj-mo' },
        { id: 4, name: 'Sveta', avatar: 'https://yt3.ggpht.com/a/AGF-l7_CxhgKe6ZNB7syEdldsBeNPZYgvJLK2f_N=s900-c-k-c0xffffffff-no-rj-mo' },
        { id: 5, name: 'Katya', avatar: 'https://yt3.ggpht.com/a/AGF-l7_CxhgKe6ZNB7syEdldsBeNPZYgvJLK2f_N=s900-c-k-c0xffffffff-no-rj-mo' },
    ],
    messages: [
        { id: 1, idDialogs: 1, message: 'Hi, this is a dialog number 1' },
        { id: 2, idDialogs: 2, message: 'Hi, this is a dialog number 2' },
        { id: 3, idDialogs: 1, message: 'Hi, this is a dialog number 3' },
        { id: 4, idDialogs: 2, message: 'Hi, this is a dialog number 4' },
        { id: 5, idDialogs: 1, message: 'Hi, this is a dialog number 5' },
    ],
    newMessageBody: ''

}

const dialogsReduser = (state = initialState, action) => {

    switch (action.type) {
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
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReduser