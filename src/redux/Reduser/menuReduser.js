import { menuAPI } from "../../api/apiMenu"

const SET_MENU_SAIDEBAR = 'SET_MENU_SAIDEBAR'
const SET_MENU_SETTING = 'SET_MENU_SETTING'

let initialState = {
    elementsLinks: [],
    settingMenu: [],
    usersLink: [
        { id: 1, name: 'Users', to: '/Users', activeClassName: 'classes.activelink' },
        { id: 2, name: 'Ruslan', to: '/Ruslan', activeClassName: 'classes.activelink' },
        { id: 3, name: 'Dima', to: '/Dima', activeClassName: 'classes.activelink' },
        { id: 4, name: 'Sasha', to: '/Sasha', activeClassName: 'classes.activelink' },
        { id: 5, name: 'Sveta', to: '/Sveta', activeClassName: 'classes.activelink' },
        { id: 6, name: 'Katya', to: '/Katya', activeClassName: 'classes.activelink' },
    ],
    settingsLinks: [
        { id: 1, name: 'Settings', to: '/Settings', activeClassName: 'classes.activelink' }
    ],
}

const menuReduser = (state = initialState, action) => {
    switch (action.type) {

        case SET_MENU_SAIDEBAR:
            return {
                ...state,
                elementsLinks: action.elementsLinks
            }

        case SET_MENU_SETTING:
            return {
                ...state,
                settingMenu: action.settingMenu
            }

        default:
            return state
    }
}

export const setMenuSaidebar = (elementsLinks) => ({ type: SET_MENU_SAIDEBAR, elementsLinks })
export const setMenuSetting = (settingMenu) => ({ type: SET_MENU_SETTING, settingMenu })

export const getMenu = (menuId) =>
    async (dispatch) => {
        menuAPI.getMenu(menuId).then(data => {
            dispatch(setMenuSaidebar(data.elementsLinks))
        })
    }

export const getMenuSettting = (menuId) =>
    async (dispatch) => {
        menuAPI.getMenuSettting(menuId).then(data => {
            dispatch(setMenuSetting(data.elementsLinks))
        })
    }

export default menuReduser