import React from 'react'
import { Route } from "react-router-dom"
import {
  postNameMyPassword, getNameMy, setAuthUser,
  totalIsFetchin
} from '../../redux/Reduser/authReduser'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { compose } from 'redux'

import Authentication from './Authentication'
import HeaderContainer from '../Header/HeaderContainer'
import Futer from '../Futer/Futer'
import DialogsContainer from '../Dialogs/DialogsContainer'
import UsersContainer from '../Users/UsersContainer'
import NavbarContainer from '../Navbar/NavbarConainer'
import ProfilContainer from '../Profil/ProfilContainer'
import classes from './Auth.module.css'


class AuthContainer extends React.Component {

  componentDidMount() {
    this.props.getNameMy()
  }

  onSubmit(nameMy, password) {
    this.postNameMyPassword(nameMy, password)
  }

  render() {
    return (
      <div className={classes.appWrapper}>
        <HeaderContainer />
        <NavbarContainer />
        <div className={classes.appWrapperContent}>
          {this.props.nameMy === null ?
            <Authentication
              {...this.props}
              onSubmit={this.onSubmit}
            /> : <Redirect to={'/Profile'} />}
          <Route path='/profile/:userId?' render={() => < ProfilContainer />} />
          <Route path='/Users' render={() => < UsersContainer />} />
          <Route path='/dialogs' render={() => < DialogsContainer />} />
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
    isFetching: state.authPage.isFetching
  }
}

export default compose(
  connect(mapStateToProps, {
    postNameMyPassword, getNameMy, setAuthUser,
    totalIsFetchin
  }),
  withRouter
)(AuthContainer)