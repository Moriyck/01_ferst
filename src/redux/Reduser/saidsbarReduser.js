let initialState = {
    elementsLinks: [
        { id: 1, name: 'Profile', to: '/Profile', activeClassName: 'classes.activelink' },
        { id: 2, name: 'Dialogs', to: '/Dialogs', activeClassName: 'classes.activelink' },
        { id: 3, name: 'News', to: '/News', activeClassName: 'classes.activelink' },
        { id: 4, name: 'Music', to: '/Music', activeClassName: 'classes.activelink' },
        { id: 4, name: 'Authentication', to: '/Authentication', activeClassName: 'classes.activelink' }
    ],

    usersLink: [
        { id: 1, name: 'Users', to: '/Users', activeClassName: 'classes.activelink' },
        { id: 2, name: 'Ruslan', to: '/Ruslan', activeClassName: 'classes.activelink' },
        { id: 3, name: 'Dima', to: '/Dima', activeClassName: 'classes.activelink' },
        { id: 4, name: 'Sasha', to: '/Sasha', activeClassName: 'classes.activelink' },
        { id: 5, name: 'Sveta', to: '/Sveta', activeClassName: 'classes.activelink' },
        { id: 6, name: 'Katya', to: '/Katya', activeClassName: 'classes.activelink' },
    ],

    settingsLinks: [
        { id: 3, name: 'Settings', to: '/Settings', activeClassName: 'classes.activelink' }
    ],
}

const saidebarReduser = (state = initialState) => {

    return state

}

export default saidebarReduser