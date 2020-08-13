import React from 'react'
import classes from '../Settings.module.css'

const AboutMe = (props) => {

    return (
        <div>
            <div>
                <b>About me</b>
            </div>
            <div>
                <span className={classes.button}>Description</span>
                <span className={classes.button}>Motto</span>
                <span className={classes.button}>Status</span>
            </div>
        </div>
    )
}

export default AboutMe