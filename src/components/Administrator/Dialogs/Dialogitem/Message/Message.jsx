import React from 'react'
import classes from './Message.module.css'
import { NavLink } from 'react-router-dom'

const Message = (props) => {
    let path = `/Dialogs/${props.author}`
    return (
        <div className={classes.messageone}>
            <div className={`${classes.dialog} ${classes.active}`}>
                <img alt="" src={props.avatar}></img>
            </div>
            <div>
                {<NavLink to={path}>{props.author}</NavLink>}
            </div>
            <div>
                {props.message}<p> </p>
            </div>
        </div>
    )
}

export default Message;

