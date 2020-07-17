import React from 'react'
import { updateNewPostText, getUsersProfile, getUsersPosts, postUsersPost } from "../../redux/Reduser/profilReduser"
import { connect } from 'react-redux'
import Profil from './Profil'
import { withRouter } from 'react-router-dom'

class ProfilContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.nameMy
    }
    this.props.getUsersProfile(userId, this.props.nameMy)
    this.props.getUsersPosts(userId)
  }

  addPost = () => {
    debugger
    this.props.postUsersPost(this.props.nameMy, this.props.profilePage.newPostText)
  }
  onPostCnage = (ref) => {
    debugger
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

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    profil: state.profilePage.profil,
    isFetching: state.profilePage.isFetching,
    nameMy: state.authPage.name
  }
}

let WithDataContainerComponent = withRouter(ProfilContainer)

export default connect(mapStateToProps, { updateNewPostText, getUsersProfile, getUsersPosts, postUsersPost })(WithDataContainerComponent, ProfilContainer)