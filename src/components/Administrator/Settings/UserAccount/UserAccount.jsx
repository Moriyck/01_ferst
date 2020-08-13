import React from 'react'
import classes from '../Settings.module.css'

const UserAccout = (props) => {

    return (
        <div>
            <div>
                <b>User account</b>
            </div>
            <div>
                <span className={classes.button}> Username</span>
                <span className={classes.button}>Password</span>
                <span className={classes.button}>email</span>
                <span className={classes.button}>Phone</span>
            </div>
        </div>
    )
}

export default UserAccout