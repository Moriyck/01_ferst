import React from 'react'
import {
  changeToFollow, changeToUnFollow, setTotalRows,
  totalIsFetchinProgress, getUsers, followThunk,
  followUnThunk
} from "../../redux/Reduser/usersReduser"
import Users from './Users'
import Preloader from '../../comon/preloader/preloader'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import {
  getUsersSelect, pageSazeSelect, totalPageCountSelect,
  currontPageSelect, gskipSazeSelect, isFetchingSelect,
  followingInProgress
} from '../../redux/Reduser/usersSelctor'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.pageSaze, this.props.currontPage)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(this.props.pageSaze, pageNumber)
  }

  render() {
    if (!this.props.nameMy) {
      return <Redirect to={'AuthContainer'} />
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

/*{let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSaze: state.usersPage.pageSaze,
    totalPageCount: state.usersPage.totalPageCount,
    currontPage: state.usersPage.currontPage,
    skipSaze: state.usersPage.skipSaze,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    nameMy: state.authPage.name
  }
}}*/

let mapStateToProps = (state) => {
  return {
    users: getUsersSelect(state),
    pageSaze: pageSazeSelect(state),
    totalPageCount: totalPageCountSelect(state),
    currontPage: currontPageSelect(state),
    skipSaze: gskipSazeSelect(state),
    isFetching: isFetchingSelect(state),
    followingInProgress: followingInProgress(state),
    nameMy: state.authPage.name
  }
}

export default compose(
  connect(mapStateToProps, {
    changeToFollow, changeToUnFollow,
    setTotalRows, totalIsFetchinProgress, getUsers, followThunk, followUnThunk
  })
)(UsersContainer)