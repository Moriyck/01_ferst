import React from 'react'
import Header from './Header'
import {
  postNameMyPassword, getNameMy, setAuthUser,
  totalIsFetchin, deleteNameMyPassword
} from '../../redux/Reduser/authReduser'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { compose } from 'redux'
import classes from './Header.module.css'

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getNameMy()
  }

  logAut() {
    this.deleteNameMyPassword()
  }

  render() {
    return (
      <header className={classes.header}>
        <Header
          {...this.props}
          logAut={this.logAut}
          nameMy={this.props.nameMy}
        />
      </header>
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
    totalIsFetchin, deleteNameMyPassword
  }),
  withRouter
)(HeaderContainer)