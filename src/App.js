import React from 'react'
import { Route } from "react-router-dom"
import './App.css'

import Futer from './components/Futer/Futer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import NavbarContainer from './components/Navbar/NavbarConainer'
import ProfilContainer from './components/Profil/ProfilContainer'
import AuthContainer from './components/Authentication/AuthContainer'
import HeaderContainer from './components/Header/HeaderContainer'

const App = () => {

    return (
        <div className='app-wrapper' >
            <HeaderContainer />
            <NavbarContainer />
            <div className='app-wrapper-content' >
                <Route path='' render={() => < AuthContainer />} />
                <Route path='/profile/:userId?' render={() => < ProfilContainer />} />
                <Route path='/dialogs' render={() => < DialogsContainer />} />
                <Route path='/Users' render={() => < UsersContainer />} />
            </div>
            <Futer />
        </div>
    )
}
export default App