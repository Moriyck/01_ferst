import React from 'react'
import {
  postNameMyPassword, getNameMy, setAuthUser,
  totalIsFetchin
} from '../../redux/Reduser/authReduser'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import Authentication from './Authentication'
import { compose } from 'redux'

class AuthContainer extends React.Component {

  componentDidMount() {
    this.props.getNameMy()
  }

  onSubmit(nameMy, password) {
    this.postNameMyPassword(nameMy, password)
  }

  render() {
    return (
      <div>
        <div>
          {this.props.nameMy === null ?
            <  Authentication
              {...this.props}
              onSubmit={this.onSubmit}
            /> : <Redirect to={'/Profile'} />}
        </div>
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