import React from 'react'
import classes from '../Settings.module.css'

const MySpecialization = (props) => {

    return (
        <div>
            <div>
                <b>My specialization</b>
            </div>
            <div>
                <span className={classes.button}>Knowledge</span>
                <span className={classes.button}>Abilities</span>
                <span className={classes.button}>Skills</span>
            </div>
        </div>
    )
}

export default MySpecialization