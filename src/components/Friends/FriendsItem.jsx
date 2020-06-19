import React from 'react'
import classes from './Friends.module.css'
import { NavLink } from 'react-router-dom'

const FriendsItem = (props) => {

  let userId = props.id
  let wordfollow = props.follow

  if (wordfollow === true) {
    wordfollow = 'Follow'
  }
  else {
    wordfollow = 'Unfollow'
  }

  let changeFolloww = () => {
    //debugger
    if (props.follow === true) {
      props.changeToFollow(userId)
    }
    else {
      props.changeToUnFollow(userId)
    }
  }

  return (
    <div className={classes.friendsItem}>

      <div>
        <div>
          <NavLink to={'/Profil/' + userId}>
          <img className={classes.avatar} src={props.avatar} />
          </NavLink>
        </div>
        <div>
          <button onClick={changeFolloww}>{wordfollow}</button>
        </div>
      </div>

      <div className={classes.message}>

        <div>
          <div>
            Nicname: {props.name}
          </div>

          <div>
            id: {props.id}
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
export default FriendsItem