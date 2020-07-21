import React from 'react'
import Message from './Message/Message'
import classes from './Dialogsitem.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  
  let path = `/Dialogs/${props.author}`
  let newMessageElement = React.createRef()

  let onSendMessageClick = () => {
    props.sendMessage()
  }

  let onNewMessageCnage = (e) => {
    let body = e.target.value
    props.updateNewMessageBody(body)
  }

  let messageEl = props.messages.map(m => <Message
    message={[m]}
  />)

  return (
    <div className={classes.dialogsItem}>
      <div>

        <img src={props.locutorAvatar}></img>
        Dialog with: {props.interlocutor}

      </div>
      <div>
        <div className={`${classes.dialog} ${classes.active}`}>
          <img src={props.avatar}></img>
          {<NavLink to={path}>{props.author}</NavLink>}
        </div>
        <div>
          {messageEl}
        </div>
        <div>
          <textarea onChange={onNewMessageCnage} ref={newMessageElement} value={props.newMessageBody} placeholder="Write a new message" />
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  )
}


export default DialogItem;