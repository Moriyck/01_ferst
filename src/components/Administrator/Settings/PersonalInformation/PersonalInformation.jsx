import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../../../comon/FormsControls/FormsControls'
import { requiredField } from '../../../../utils/validators/validator'

const PersonalInformationForm = (props) => {
    return (
        <div >
            <form id="persInf" onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        id="propername"
                        type="text"
                        name="propername"
                        placeholder="Proper name"
                        size="24"
                        component={Input}
                        validate={[requiredField]}
                    />
                </div>
                <div>
                    <Field
                        id="surname"
                        type="text"
                        name="surname"
                        placeholder="Surname"
                        size="24"
                        component={Input}
                        validate={[requiredField]}
                    />
                </div>
                <div>
                    <Field
                        id="birthdate"
                        type="date"
                        name="birthdate"
                        placeholder="Birthdate"
                        size="24"
                        component={Input}
                        validate={[requiredField]}
                    />
                </div>
                <div>
                    <button>Save</button>
                </div>
            </form>
             <input type={"file"} onChange={props.fileTheDownload} />
        </div>
    )
}

const PersInfReduxForm = reduxForm({ form: 'persInf' })(PersonalInformationForm)
const PersonalInformation = (props) => {
    const onSubmit = (formData) => {
        props.onSubmit(formData.propername, formData.surname, formData.birthdate)
    }

    return (
        <div>
            <div>
                <b>Personal information</b>
            </div>
            <div>
                < PersInfReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default PersonalInformation