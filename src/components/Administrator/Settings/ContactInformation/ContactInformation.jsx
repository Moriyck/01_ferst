import React from 'react'
import classes from '../Settings.module.css'

const ContactInformation = (props) => {

    return (
        <div>
            <div>
                <b>Contact information</b>
            </div>
            <div>
                <span className={classes.button}>Country</span>
                <span className={classes.button}>City</span>
                <span className={classes.button}>email</span>
                <span className={classes.button}>Phone</span>
                <span className={classes.button}>Website</span>
            </div>
        </div>
    )
}

export default ContactInformation