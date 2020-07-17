import React from 'react'
import {
  changeToFollow, changeToUnFollow, setUsersFollow, setTotalRows,
  totalIsFetchinProgress, getUsers, followThunk, followUnThunk
} from "../../redux/Reduser/usersReduser"
import Users from './Users'
import Preloader from '../../comon/preloader/preloader'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.pageSaze, this.props.currontPage)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(this.props.pageSaze, pageNumber)
  }

  render() {
    if (!this.props.nameMy) { return <Redirect to={'AuthContainer'} />
  }
    return (
      <div>
        <div>
          {this.props.isFetching ? <Preloader /> : null}
        </div>
        <Users
          {...this.props}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          totalPageCount={this.props.totalPageCount}
          pageSaze={this.props.pageSaze}
          currontPage={this.props.currontPage}
          changeToFollow={this.props.changeToFollow}
          changeToUnFollow={this.props.changeToUnFollow}
          nameMy={this.props.nameMy}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSaze: state.usersPage.pageSaze,
    totalPageCount: state.usersPage.totalPageCount,
    currontPage: state.usersPage.currontPage,
    skipSaze: state.usersPage.skipSaze,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    authPage: state.authPage,
    nameMy: state.authPage.name
  }
}

export default connect(mapStateToProps, {
  changeToFollow, changeToUnFollow,
  setTotalRows, totalIsFetchinProgress, getUsers, followThunk, followUnThunk
})(UsersContainer)