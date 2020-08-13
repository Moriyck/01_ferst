import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import {
  deleteNameMyPassword, getNameMy, postNameMyPassword, setAuthUser,
  totalIsFetchin
} from '../../../redux/Reduser/authReduser'
import Header from './Header'
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
    isFetching: state.authPage.isFetching,
    profilePage: state.profilePage
  }
}

export default compose(
  connect(mapStateToProps, {
    postNameMyPassword, getNameMy, setAuthUser,
    totalIsFetchin, deleteNameMyPassword
  }),
  withRouter
)(HeaderContainer)