import React from 'react'
import { setProfil, addPost, updateNewPostText, totalIsFetchin } from "../../redux/Reduser/profilReduser"
import *as axios from 'axios'
import Preloader from '../../comon/preloader/preloader'
import { connect } from 'react-redux'
import Profil from "./Profil"



class ProfilContainer extends React.Component {

  componentDidMount() {
    //debugger
    //this.props.totalIsFetchin(true)
    axios.get(`http://localhost:5984/myapp/0617385af2d50279f09dbe3841005dd2`)
      .then(response => {
        debugger
        //this.props.totalIsFetchin(false)
        this.props.setProfil(response.data)
        //this.props.setTotalRows(response.data.total_rows)
      })
  }
  /* onPageChanged = (pageNumber) => {
     this.props.totalIsFetchin(true)
     let skipSaze = (this.props.pageSaze * pageNumber) - this.props.pageSaze
     this.props.setCurrontPage(pageNumber)
     axios.get(`http://localhost:5984/myapp/_design/users/_view/users?include_docs=true&limit=${this.props.pageSaze}&skip=${skipSaze}`)
       .then(response => {
         this.props.totalIsFetchin(false)
         this.props.setUsers(response.data.rows)
         this.props.setTotalRows(response.data.total_rows)
       })
   }*/
  render() {
    //debugger
    return (
      <div>
        <div>
          {this.props.isFetching ? <Preloader /> : null}
        </div>
        <Profil {...this.props} profil= {this.props.profilePage.profil}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    profil: state.profilePage.profil
  }
}

export default connect(mapStateToProps, { updateNewPostText, addPost, setProfil, totalIsFetchin })(ProfilContainer)