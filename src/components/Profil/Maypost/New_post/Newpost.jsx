import React from 'react'
import { Field, reduxForm } from 'redux-form'
import classes from './Newpost.module.css'
import { requiredField, maxLengthCreator} from '../../../../utils/validators/validator'
import { Textarea } from '../../../../comon/FormsControls/FormsControls'

const maxLength10 = maxLengthCreator(10)
const NewpostForm = (props) => {
  return (
    <div className={classes.newpost}>
      <form id="newpost" onSubmit={props.handleSubmit}>
        <div>
          <Field
            id="newpost"
            type="text"
            name="newpost"
            placeholder="Write a new post"
            component={Textarea}
            validate={[requiredField, maxLength10]}

          />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
    </div>
  )
}

const NewpostReduxForm = reduxForm({ form: 'newpost' })(NewpostForm)
const Newpost = (props) => {
  const onSubmit = (formData) => {
    props.onSubmit(formData.newpost)
  }

  return (
    <div className={classes.newpost}>
      <div>
        <h3>My post</h3>
      </div>
      <div>
        <NewpostReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default Newpost;