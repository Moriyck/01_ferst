import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../../hoc/withAuthRedirectComponent'
import { fileTheDownload, getPosts, getProfile, postPost, updateNewPostText, updateStatus, updateProfile } from "../../../redux/Reduser/profilReduser"
import Profil from './Profil'

class ProfilContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.nameMy
    }
    this.props.getProfile(userId)
    this.props.getPosts(userId)
  }

  updateStatus = (status) => {
    this.props.updateStatus(this.props.nameMy, this.props.profilePage.profil, status, '23.07.2020')
  }

  onSubmit = (newPost) => {
    this.props.postPost(this.props.nameMy, newPost)
    this.props.updateNewPostText(newPost)
  }

  fileTheDownload = (e) => {
    this.props.fileTheDownload(this.props.nameMy, this.props.profilePage.profil._rev, e.target.files[0])
  }

  render() {
    return (
      <div>
        <Profil {...this.props}
          onSubmit={this.onSubmit}
          updateStatus={this.updateStatus}
          fileTheDownload={this.fileTheDownload}
          rev={this.props.profilePage.profil._rev}
          isOwner={!this.props.match.params.userId}
          nameMy={this.props.nameMy}
          profil={this.props.profilePage.profil}
          newPostText={this.props.profilePage.newPostText}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profilePage: state.profilePage,
  isFetching: state.profilePage.isFetching
})

export default compose(
  connect(mapStateToProps, { updateNewPostText, getProfile, getPosts, postPost, updateStatus, fileTheDownload, updateProfile }),
  withRouter,
  withAuthRedirect
)(ProfilContainer)