import React from 'react'
import { setMyDialods, updateNewMessageBody, getMyDialogs } from '../../redux/Reduser/dialogsReduser'
import { getUsersProfile } from "../../redux/Reduser/profilReduser"
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import Preloader from '../../comon/preloader/preloader'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirectComponent'
import { compose } from 'redux'

class DialodsContainer extends React.Component {

  componentDidMount() {
    debugger
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.nameMy
    }
    this.props.getMyDialogs(userId)
    this.props.getUsersProfile(userId)
  }

  onNewMessageCnage = () => {

  }

  onSendMessageClick = () => {

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
          onPageChanged={this.onNewMessageCnage}
          onSendMessageClick={this.onSendMessageClick}
          nameMy={this.props.nameMy}
          profil={this.props.profilePage.profil}
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
  connect(mapStateToProps, { setMyDialods, updateNewMessageBody, getMyDialogs, getUsersProfile }),
  withRouter,
  withAuthRedirect
)(DialodsContainer)