import { applyMiddleware, combineReducers, createStore } from "redux"
import { reducer as formReducer } from "redux-form"
import thunkMidleware from "redux-thunk"
import authReduser from "./Reduser/authReduser"
import dialogsReduser from "./Reduser/dialogsReduser"
import menuReduser from "./Reduser/menuReduser"
import profilReduser from "./Reduser/profilReduser"
import settingsReduser from "./Reduser/settingsReduser"
import usersReduser from "./Reduser/usersReduser"


let reduser = combineReducers({
    profilePage: profilReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser,
    allMenu: menuReduser,
    authPage: authReduser,
    allSettings: settingsReduser,
    form: formReducer
})

let store = createStore(reduser, applyMiddleware(thunkMidleware))

window.store = store
export default store