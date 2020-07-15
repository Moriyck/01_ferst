import React from 'react'
import Message from './Message/Message'
import DialogItem from './Dialogitem/Dialogitem'
import classes from './Dialogs.module.css'


const Dialogs = (props) => {

  let newMessageElement = React.createRef()

  let onSendMessageClick = () => {
    props.sendMessage()
  }

  let onNewMessageCnage = (e) => {
    let body = e.target.value
    props.updateNewMessageBody(body)
  }

  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} avatar={d.avatar} name={d.name} id={d.id} />)
  let messagElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id} idDialogs={m.idDialogs} />)

  return (
    <div>
      <div className={classes.dialogs} >
        <div>
          {dialogsElements}
        </div>
        <div>
          {messagElements}
        </div>
      </div>
      <div>
        <textarea onChange={onNewMessageCnage} ref={newMessageElement} value={props.dialogsPage.newMessageBody} placeholder="Write a new message"/>
      </div>
      <div>
        <button onClick={onSendMessageClick}>Send</button>
      </div>
    </div>
  )
}
export default Dialogs;