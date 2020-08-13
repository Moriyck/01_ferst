import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../../hoc/withAuthRedirectComponent'
import { getMenuSettting } from '../../../redux/Reduser/menuReduser'
import { fileTheDownload, getPosts, getProfile, postPost, updateNewPostText, updateProfile, updateStatus } from "../../../redux/Reduser/profilReduser"
import Settings from './Settings'

class SettingsContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.nameMy
    }
    this.props.getProfile(userId)
    this.props.getMenuSettting('settingMenu')
  }

  updateProfile = (propername, surname, birthdate) => {
    this.props.updateProfile(this.props.nameMy, propername, surname, birthdate)
  }

  onChange = (servisId) => {
    this.props.onChange(servisId)
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
      <div key="0101">
        <Settings key="01"
          {...this.props}
          onChange={this.onChange}
          updateProfile={this.updateProfile}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  allSettings: state.allSettings,
  allMenu: state.allMenu
})

export default compose(
  connect(mapStateToProps, { updateNewPostText, getProfile, getPosts, postPost, updateStatus, fileTheDownload, getMenuSettting, updateProfile }),
  withRouter,
  withAuthRedirect
)(SettingsContainer)