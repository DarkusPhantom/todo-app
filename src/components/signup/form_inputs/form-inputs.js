import React, { Fragment } from 'react'
import './form-inputs.css'
import ValidateField from './validateInputs'

function SignupForm({type, id, placeholder, dataAttribute}) {
  return (
    <Fragment>
      <div className="signup-form-input">
        <input type={type} id={id} placeholder={placeholder} onBlur={ValidateField} dataattribute={dataAttribute} />
      </div>
    </Fragment>
  );
}

export default SignupForm;
