import React from 'react'
import classes from './AuthContainer'
import { reduxForm, Field } from 'redux-form'

const LoginForm = (props) => {
  return (
    <div className={classes.authentication}>
      <form id="login" onSubmit={props.handleSubmit}>
        <div>
          <Field id="username" type="text" name="username" placeholder="Username" size="24" component="input" />
        </div>
        <div>
          <Field id="password" type="password" name="password" placeholder="Password" size="24" component="input" />
        </div>
        <div>
          <Field id="password" type="checkbox" name="remamberMe" component="input" />Remember me
        </div>
        <div>
          <button>Log In</button>
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