import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { Select } from '../../../../comon/FormsControls/FormsControls'
import { requiredField } from '../../../../utils/validators/validator'

const ConfigureServicesForm = (props) => {
  const onChange = (formData) => {
    props.onChange(formData.target.value)
  }
  let option = props.allSettings.allservises.map(o => <option key={o.key} value={o.key} >{o.key}</option>)

  return (
    <div>
      <form id="configservices" onSubmit={props.handleSubmit}>
        <div>
          <Field
            key={1}
            id="services"
            type="select"
            name="services"
            placeholder="Add services"
            selected="Add services"
            option={option}
            onChange={onChange}
            component={Select}
            validate={[requiredField]}
          />
        </div>
        <div>
          {props.value}
        </div>
        <div>
          <button>Save</button>
        </div>
      </form>
    </div>
  )
}

const ServicesReduxForm = reduxForm({ form: 'configservices' })(ConfigureServicesForm)

const ConfigureServices = (props) => {
  const onSubmit = (formData) => {
    debugger
    props.onSubmit(formData.services)
  }

  return (
    <div>
      <div>
        <b>Configure services</b>
      </div>
      <div>
        < ServicesReduxForm
          onSubmit={onSubmit}
          onChange={props.onChange}
          allSettings={props.allSettings}
        />
      </div>
    </div>
  )
}

export default ConfigureServices