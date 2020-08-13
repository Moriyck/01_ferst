import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom"
import './App.css'
import AuthContainer from './components/Authentication/AuthContainer'
import store from './redux/reduxStore'

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div>
                    <AuthContainer />
                </div>
            </Provider>
        </BrowserRouter>
    )
}
export default App