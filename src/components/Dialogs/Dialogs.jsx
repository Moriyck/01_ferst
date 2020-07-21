import React from 'react'

import DialogItem from './Dialogitem/Dialogitem'
import classes from './Dialogs.module.css'
import { Redirect } from 'react-router-dom'


const Dialogs = (props) => {

  let dialogsElements = props.dialogs.map(d => <DialogItem
    key={d.doc.id}
    avatar={d.doc.avatar}
    author={d.doc.author}
    id={d.doc.id}
    interlocutor={d.doc.interlocutor}
    messages={[d.doc.messages]}
    profil={props.profil}
    locutorAvatar={props.profil.avatar}
    newMessageBody={props.dialogsPage.newMessageBody}
  />)

  if (!props.nameMy) {
    return <Redirect to={'AuthContainer'} />
  }
  return (
    <div className={classes.dialogs} >
      {dialogsElements}
    </div>
  )
}
export default Dialogs;