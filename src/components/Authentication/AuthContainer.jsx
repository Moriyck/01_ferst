import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, withRouter, Switch } from "react-router-dom"
import { compose } from 'redux'
import {
  getNameMy, postNameMyPassword, setAuthUser,
  totalIsFetchin, putRegistrUserNew
} from '../../redux/Reduser/authReduser'
import DialogsContainer from '../Administrator/Dialogs/DialogsContainer'
import Futer from '../Administrator/Futer/Futer'
import HeaderContainer from '../Administrator/Header/HeaderContainer'
import NavbarContainer from '../Administrator/Navbar/NavbarConainer'
import ProfilContainer from '../Administrator/Profil/ProfilContainer'
import SettingsContainer from '../Administrator/Settings/SettingsContainer'
import UsersContainer from '../Administrator/Users/UsersContainer'
import classes from './Auth.module.css'
import Authentication from './Authentication'
import Registration from './Registration'

class AuthContainer extends React.Component {

  componentDidMount() {
    this.props.getNameMy()
  }

  onSubmit(nameMy, password) {
    this.postNameMyPassword(nameMy, password)
    this.putRegistrUserNew(nameMy, password)
  }

  render() {
    return (
      <div className={classes.appWrapper}>
        <HeaderContainer />
        <NavbarContainer />
        <div className={classes.appWrapperContent}>
          <Switch>
            <Route path='/profile/:userId?' render={() => < ProfilContainer />} />
            <Route path='/Dialogs/:userId?' render={() => < DialogsContainer />} />
            <Route path='/Users' render={() => < UsersContainer />} />
            <Route path='/Settings' render={() => < SettingsContainer />} />
            <Route exact path='/Registration' render={() => < Registration {...this.props} onSubmit={this.onSubmit} />} />
            {this.props.nameMy === null ?
              <Authentication
                {...this.props}
                onSubmit={this.onSubmit}
              /> : <Redirect to={'/Profile'} />}
          </Switch>
        </div>
        <Futer />
      </div >
    )
  }
}

let mapStateToProps = (state) => {
  return {
    authPage: state.authPage,
    nameMy: state.authPage.name,
    isFetching: state.authPage.isFetching,
    allMenu: state.allMenu
  }
}

export default compose(
  connect(mapStateToProps, {
    postNameMyPassword, getNameMy, setAuthUser,
    totalIsFetchin, putRegistrUserNew
  }),
  withRouter
)(AuthContainer)