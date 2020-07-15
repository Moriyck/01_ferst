import React from 'react'
import classes from './AuthContainer'

const Authentication = (props) => {

  return (
    <div className={classes.authentication}>
      <form id="login">
        <div>
          You are not logged in
      </div>
        <div>
          <input id="username" type="text" name="username" placeholder="Username" size="24" />
        </div>
        <div >
          <input id="password" type="password" name="password" placeholder="Password" size="24" />
        </div>
        <div >
          <button>Log In</button>
        </div>
      </form>
    </div>
  )
}

export default Authentication;