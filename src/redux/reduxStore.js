import { combineReducers, createStore, applyMiddleware } from "redux"
import thunkMidleware from "redux-thunk"
import profilReduser from "./Reduser/profilReduser"
import dialogsReduser from "./Reduser/dialogsReduser"
import saidebarReduser from "./Reduser/saidsbarReduser"
import usersReduser from "./Reduser/usersReduser"
import authReduser from "./Reduser/authReduser"

let reduser = combineReducers({
    profilePage: profilReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser,
    saidebar: saidebarReduser,
    authPage: authReduser
})

let store = createStore(reduser, applyMiddleware(thunkMidleware))

export default store