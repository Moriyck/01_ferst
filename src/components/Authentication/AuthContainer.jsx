import React from 'react'
import { setAuthUser, totalIsFetchin } from '../../redux/Reduser/authReduser'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Authentication from './Authentication'
import { nameMyAPI } from '../../api/api'
import { compose } from 'redux'

class AuthContainer extends React.Component {

  componentDidMount() {
    this.props.totalIsFetchin(true)
    nameMyAPI.getNameMy().then(data => {
      this.props.totalIsFetchin(false)
      this.props.setAuthUser(data.userCtx.name)
    })
  }

  render() {

    return (
      <div>
        <div>
          Hello, {this.props.nameMy}
        </div>
        <div>
          {this.props.nameMy === null ? <Authentication {...this.props} /> : null}
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
  connect(mapStateToProps, { setAuthUser, totalIsFetchin }),
  withRouter
)(AuthContainer)