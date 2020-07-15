const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_PROFIL = 'SET_PROFIL'
const TOGAL_IS_FECHING = 'TOGAL_IS_FECHING'

let initialState = {
    profil: [],
    posts: [
        { id: 1, avatar: 'https://yt3.ggpht.com/a/AGF-l7_CxhgKe6ZNB7syEdldsBeNPZYgvJLK2f_N=s900-c-k-c0xffffffff-no-rj-mo', message: 'Hi, this is a dialog number one', likesCount: 112 },
        { id: 2, avatar: 'https://yt3.ggpht.com/a/AGF-l7_CxhgKe6ZNB7syEdldsBeNPZYgvJLK2f_N=s900-c-k-c0xffffffff-no-rj-mo', message: 'Hi, this is a dialog number two', likesCount: 25 },
        { id: 3, avatar: 'https://yt3.ggpht.com/a/AGF-l7_CxhgKe6ZNB7syEdldsBeNPZYgvJLK2f_N=s900-c-k-c0xffffffff-no-rj-mo', message: 'Hi, this is a dialog number 3', likesCount: 33 },
        { id: 4, avatar: 'https://yt3.ggpht.com/a/AGF-l7_CxhgKe6ZNB7syEdldsBeNPZYgvJLK2f_N=s900-c-k-c0xffffffff-no-rj-mo', message: 'Hi, this is a dialog number 4', likesCount: 365 },
        { id: 5, avatar: 'https://yt3.ggpht.com/a/AGF-l7_CxhgKe6ZNB7syEdldsBeNPZYgvJLK2f_N=s900-c-k-c0xffffffff-no-rj-mo', message: 'Hi, this is a dialog number 5', likesCount: 52 }
    ],

    newPostText: ''
}


const profilReduser = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST:
            let text = state.newPostText
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {
                    id: 6,
                    avatar: 'https://yt3.ggpht.com/a/AGF-l7_CxhgKe6ZNB7syEdldsBeNPZYgvJLK2f_N=s900-c-k-c0xffffffff-no-rj-mo',
                    message: text,
                    likesCount: 10
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
export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text })
export const totalIsFetchin = (isFetching) => ({ type: TOGAL_IS_FECHING, isFetching })

export default profilReduser