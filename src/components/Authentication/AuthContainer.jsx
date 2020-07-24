import React from 'react'
import { putNameMyPassword, getNameMy, setAuthUser, totalIsFetchin } from '../../redux/Reduser/authReduser'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Authentication from './Authentication'
import { compose } from 'redux'

class AuthContainer extends React.Component {

  componentDidMount() {
    this.props.getNameMy()
  }
  onSubmit(nameMy, password) {
    this.putNameMyPassword(nameMy, password)
  }

  render() {
    return (
      <div>
        <div>
          Hello, {this.props.nameMy}
        </div>
        <div>
          {this.props.nameMy === null ?
            <  Authentication
              {...this.props}
              onSubmit={this.onSubmit}
            /> : null}
        </div>
      </div>
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
  connect(mapStateToProps, { putNameMyPassword, getNameMy, setAuthUser, totalIsFetchin }),
  withRouter
)(AuthContainer)