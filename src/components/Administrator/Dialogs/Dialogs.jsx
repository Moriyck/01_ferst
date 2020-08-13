import React from 'react'
import DialogItem from './Dialogitem/Dialogitem'
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map(d => <DialogItem
    key={d.id}
    avatar={d.doc.avatar}
    author={d.doc.author}
    id={d.id}
    doc={d.doc}
    interlocutor={d.doc.interlocutor}
    messages={d.doc.messages}
    profil={props.profil}
    locutorAvatar={props.profil.avatar}
    onSubmit={props.onSubmit}
  />)

  return (
    <div className={classes.dialogs} >
      {dialogsElements}
    </div>
  )
}
export default Dialogs;