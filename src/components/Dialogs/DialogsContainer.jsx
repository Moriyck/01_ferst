import React from 'react'
import { putMessageDialogs, getMyDialogs } from '../../redux/Reduser/dialogsReduser'
import { getProfile } from "../../redux/Reduser/profilReduser"
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import Preloader from '../../comon/preloader/preloader'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirectComponent'
import { compose } from 'redux'

class DialodsContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.nameMy
    }
    this.props.getMyDialogs(userId)
    this.props.getProfile(userId)
  }

  onSubmit = (idDialogs, doc, message) => {
    this.props.putMessageDialogs(idDialogs, doc, this.props.nameMy, message)
  }

  render() {

    return (
      <div>
        <div>
          {this.props.isFetching ? <Preloader /> : null}
        </div>
        <Dialogs
          {...this.props}
          dialogs={this.props.dialogsPage.dialogs}
          nameMy={this.props.nameMy}
          profil={this.props.profilePage.profil}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
  dialogs: state.dialogsPage.dialogs,
  authPage: state.authPage,
  nameMy: state.authPage.name,
  profilePage: state.profilePage
})

export default compose(
  connect(mapStateToProps, { putMessageDialogs, getMyDialogs, getProfile }),
  withRouter,
  withAuthRedirect
)(DialodsContainer)