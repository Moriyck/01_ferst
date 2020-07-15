import React from 'react'
import classes from './Users.module.css'
import { NavLink } from 'react-router-dom'

const usersItem = (props) => {

  let doc = props.doc
  let userId = props.id
  let wordfollow = props.follow
  let rev = props.rev
  let nameMy = props.nameMy

  let revFollow = props.revFollow
  let nameMyFollow = props.nameMyFollow

  if (props.follow === true) {
    wordfollow = 'Unfollow'
  }
  else {
    wordfollow = 'To follow'
  }

  let changeFolloww = () => {

    if (props.follow === true) {
      props.followThunk(userId, revFollow)
    }
    else {
      props.followUnThunk(userId, nameMy)
    }
  }

  return (
    <div className={classes.usersItem}>

      <div>
        <div>
          <NavLink to={'/Profile/' + userId}>
            <img className={classes.avatar} src={props.avatar} />
          </NavLink>
        </div>
        <div>
          <button disabled={props.followingInProgress.some(id => id === userId)} onClick={changeFolloww}>{wordfollow}</button>
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
export default usersItem