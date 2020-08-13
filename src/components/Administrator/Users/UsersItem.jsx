import React from 'react'
import classes from './Users.module.css'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../../assets/img/user.png'

const usersItem = (props) => {

  let userId = props.id
  let wordfollow = props.follow
  let nameMy = props.nameMy
  let idFollow = props.idFollow
  let revFollow = props.revFollow

  if (props.follow === true) {
    wordfollow = 'Unfollow'
  }
  else {
    wordfollow = 'Follow me'
  }

  let changeFolloww = () => {

    if (props.follow === true) {
      props.followUnThunk(userId, idFollow, revFollow)
    }
    else {
      props.followThunk(userId, nameMy)
    }
  }

  let messageUserGo = () => {
    //let writ = 1
  }
  
  return (
    <div className={classes.usersItem}>

      <div>
        <div>
          <NavLink to={'/Profile/' + userId}>
            <img alt={props.name} className={classes.avatar} src={props.avatar || userPhoto} />
          </NavLink>
        </div>
        <div>
          <button disabled={props.followingInProgress.some(id => id === userId)} onClick={changeFolloww}>{wordfollow}</button>
        </div>
        <div>
          <NavLink to={'/Dialogs/' + userId}>
            <button onClick={messageUserGo}>Write a message</button>
          </NavLink>
        </div>
      </div>

      <div className={classes.message}>

        <div>
          <div>
            Nicname: {props.name}
          </div>
          <div>
            id: {props.id} idFollow={props.idFollow}
          </div>
          <div>
            rev: {props.rev} revFollow: {props.revFollow}
          </div>
          <div>
            Status: {props.status}
          </div>
        </div>

        <div>
          <div>
            Country: {props.country}
          </div>
          <div>
            City: {props.city}
          </div>
        </div>

      </div>
    </div>
  )
}
export default usersItem