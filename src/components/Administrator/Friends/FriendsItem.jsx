import React from 'react'
import classes from './Friends.module.css'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../api/api'

const FriendsItem = (props) => {
  let userId = props.id
  let wordfollow = props.follow
  let rev = props.rev
  let revFollow = props.revFollow
  let nameMy = props.nameMy
  let doc = props.doc
  
  if (wordfollow === true) {
    wordfollow = 'Unfollow'
  }
  else {
    wordfollow = 'Follow '+revFollow
  }

  let changeFolloww = () => {
    if (props.follow === nameMy) {
      usersAPI.deleteFollow(userId, rev).then(data => {
        if (data.ok === true)
          props.changeToUnFollow(userId)
      })
    }
    else {
      usersAPI.putFollow(userId, nameMy).then(data => {
        if (data.ok === true)
          props.changeToFollow(userId)
      })
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
            rev: {props.rev}
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