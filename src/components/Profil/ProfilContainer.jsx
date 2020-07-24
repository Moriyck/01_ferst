import React from 'react'
import Profil from './Profil'
import { connect } from 'react-redux'
import { updateNewPostText, getProfile, getPosts, postPost, updateStatus } from "../../redux/Reduser/profilReduser"
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirectComponent'
import { compose } from 'redux'

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

  render() {
    return (
      <div>
        <Profil {...this.props}
          nameMy={this.props.nameMy}
          profil={this.props.profilePage.profil}
          newPostText={this.props.profilePage.newPostText}
          onSubmit={this.onSubmit}
          updateStatus={this.updateStatus}
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
  connect(mapStateToProps, { updateNewPostText, getProfile, getPosts, postPost, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfilContainer)