import React from 'react'
import { updateNewPostText, getUsersProfile, getUsersPosts, postUsersPost } from "../../redux/Reduser/profilReduser"
import { connect } from 'react-redux'
import Profil from './Profil'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirectComponent'
import { compose } from 'redux'

class ProfilContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.nameMy
    }
    this.props.getUsersProfile(userId)
    this.props.getUsersPosts(userId)
  }

  addPost = () => {
    this.props.postUsersPost(this.props.nameMy, this.props.profilePage.newPostText)
  }
  onPostCnage = (ref) => {
    this.props.updateNewPostText(ref.currentTarget.value)
  }

  render() {
    return (
      <div>
        <Profil {...this.props}
          nameMy={this.props.nameMy}
          profil={this.props.profilePage.profil}
          newPostText={this.props.profilePage.newPostText}
          addPost={this.addPost}
          onPostCnage={this.onPostCnage}
        />
      </div>
    )
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfilContainer)

let mapStateToProps = (state) => ({
  profilePage: state.profilePage,
  isFetching: state.profilePage.isFetching
})

export default compose(
  connect(mapStateToProps, { updateNewPostText, getUsersProfile, getUsersPosts, postUsersPost }),
  withRouter,
  withAuthRedirect
)(ProfilContainer)