import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import Preloader from '../../../comon/preloader/preloader'
import {
  changeToFollow, changeToUnFollow,
  followThunk,
  followUnThunk, getUsers, setTotalRows,
  totalIsFetchinProgress
} from "../../../redux/Reduser/usersReduser"
import {
  currontPageSelect,
  followingInProgress,
  getUsersSuperSelect, gskipSazeSelect, isFetchingSelect, pageSazeSelect, totalPageCountSelect
} from '../../../redux/Reduser/usersSelctor'
import Users from './Users'

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
      <div key='003'>
        <div key='002'>
          {this.props.isFetching ? <Preloader /> : null}
        </div>
        <Users
          key='001'
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
    users: getUsersSuperSelect(state),
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