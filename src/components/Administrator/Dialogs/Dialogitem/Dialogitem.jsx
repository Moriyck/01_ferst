import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../../../comon/FormsControls/FormsControls'
import { maxLengthCreator, requiredField } from '../../../../utils/validators/validator'
import classes from './Dialogsitem.module.css'
import Message from './Message/Message'

const maxLength10 = maxLengthCreator(100)
const DialogForm = (props) => {
  return (
    <div>
      <form id="login" onSubmit={props.handleSubmit}>
        <Field
          id="dialogMessageText"
          type="text"
          name="dialogMessageText"
          placeholder="Write a new message"
          component={Textarea}
          validate={[requiredField, maxLength10]}
        />
        <button>Send</button>
      </form>
    </div>
  )
}

const DialogReduxForm = reduxForm({ form: 'dialogText' })(DialogForm)
const DialogItem = (props) => {

  let messageEl = props.messages.map(m => <Message
    author={m.author}
    message={m.message}
  />)

  const onSubmit = (formData) => {
    props.onSubmit(props.id, props.doc, formData.dialogMessageText)
  }

  return (
    <div className={classes.dialogsItem}>
      <div>
        <img alt="" src={props.locutorAvatar}></img>
        Dialog with: {props.interlocutor}
      </div>
      <div>
        <div>
          {messageEl}
        </div>
        <div>
          <DialogReduxForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  )
}

export default DialogItem