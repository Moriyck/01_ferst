import React from 'react'
import classes from './Auth.module.css'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../../comon/FormsControls/FormsControls'
import { requiredField, minLengthCreator } from '../../utils/validators/validator'
import { NavLink } from 'react-router-dom'

const minLength10 = minLengthCreator(10)
const LoginForm = (props) => {
  return (
    <div className={classes.authentication}>
      <form id="login" onSubmit={props.handleSubmit}>
        <div>
          <Field
            id="username"
            type="text"
            name="username"
            placeholder="Username"
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
            placeholder="Password"
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
          />Remember me
        </div>
        <div >
          {props.error}
        </div>
        <div>
          <button>Log In</button><span> or</span> <span key=""><NavLink to="/Registration" > Sing up</NavLink> </span>
        </div>
      </form>
    </div>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
const Authentication = (props) => {
  const onSubmit = (formData) => {
    props.onSubmit(formData.username, formData.password)
  }

  return (
    <div className={classes.authentication}>
      <div>
        <h1>You are not logged in</h1>
      </div>
      <div>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default Authentication