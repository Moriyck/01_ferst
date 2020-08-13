import React from 'react'
import classes from './Auth.module.css'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../../comon/FormsControls/FormsControls'
import { requiredField, minLengthCreator } from '../../utils/validators/validator'

const minLength10 = minLengthCreator(10)
const RegistrForm = (props) => {
  debugger
  return (
    <div className={classes.authentication}>
      <form id="registration" onSubmit={props.handleSubmit}>
        <div>
          <Field
            id="login"
            type="text"
            name="login"
            placeholder="Create a username"
            size="24"
            component={Input}
            validate={[requiredField, minLength10]}
          />
        </div>
        <div>
          <Field
            id="password"
            type="password"
            name="password"
            placeholder="Create a password"
            size="24"
            autoComplete=""
            component={Input}
            validate={[requiredField, minLength10]}
          />
        </div>
        <div>
          <Field
            id="passwordRepeat"
            type="password"
            name="passwordRepeat"
            placeholder="Repeat password"
            size="24"
            autoComplete=""
            component={Input}
            validate={[requiredField, minLength10]}
          />
        </div>
               <div>
          <Field
            id="mobilePhoneNumber"
            type="text"
            name="mobilePhoneNumber"
            placeholder="Mobile phone number"
            size="24"
            autoComplete=""
            component={Input}
            validate={[requiredField, minLength10]}
          />
        </div>
        <div>
          <Field
            id="remamberMe"
            type="checkbox"
            name="remamberMe"
            component={Input}
            validate={[requiredField]}
          />I accept the terms of the User agreement and give my consent to XXXX to process my personal information on the terms defined by the privacy Policy.
        </div>
        <div >
          {props.error}
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
          </div>
  )
}

const RegistrReduxForm = reduxForm({ form: 'registration' })(RegistrForm)
const Registration = (props) => {
  const onSubmit = (formData) => {
    debugger
    props.onSubmit(formData.login, formData.passwordRepeat)
  }

  return (
    <div className={classes.authentication}>
      <div>
        <h1>Complete the registration procedure</h1>
      </div>
      <div>
        <RegistrReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default Registration