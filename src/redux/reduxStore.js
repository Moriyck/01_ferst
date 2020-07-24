import { combineReducers, createStore, applyMiddleware } from "redux"
import thunkMidleware from "redux-thunk"
import profilReduser from "./Reduser/profilReduser"
import dialogsReduser from "./Reduser/dialogsReduser"
import saidebarReduser from "./Reduser/saidsbarReduser"
import usersReduser from "./Reduser/usersReduser"
import authReduser from "./Reduser/authReduser"
import { reducer as formReducer } from "redux-form"

let reduser = combineReducers({
    profilePage: profilReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser,
    saidebar: saidebarReduser,
    authPage: authReduser,
    form: formReducer
})

let store = createStore(reduser, applyMiddleware(thunkMidleware))

window.store = store
export default store