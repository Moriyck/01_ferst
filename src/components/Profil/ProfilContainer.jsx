import React from 'react'
import { setProfil, addPost, updateNewPostText, totalIsFetchin } from "../../redux/Reduser/profilReduser"
import *as axios from 'axios'
import { connect } from 'react-redux'
import Profil from './Profil'
import { withRouter } from 'react-router-dom'

class ProfilContainer extends React.Component {

  componentDidMount() {
    this.props.totalIsFetchin(true)
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 'username1'
    }
    axios.get('http://localhost:5984/_users/org.couchdb.user%3A' + userId, { withCredentials: true })
      .then(response => {
        this.props.setProfil(response.data)
      })
  }

  render() {
    return (
      <div>
        <Profil {...this.props} profil={this.props.profilePage.profil}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    profil: state.profilePage.profil,
    isFetching: state.profilePage.isFetching
  }
}

let WithDataContainerComponent = withRouter(ProfilContainer)

export default connect(mapStateToProps, { setProfil, updateNewPostText, addPost, totalIsFetchin })(WithDataContainerComponent, ProfilContainer)