import React, { Fragment } from 'react'
import './form-inputs.css'

function SignupForm({type, id, placeholder, error_text}) {
  return (
    <Fragment>
      <div className="signup-form-input">
        <input type={type} id={id} placeholder={placeholder} />
        <span className="input-error hidden">
          <img className="input-icon" src="images/icon-error.svg" alt="" />
        </span>
        <p className="input-error-text hidden"><em>{error_text}</em></p>
      </div>
    </Fragment>
  );
}

export default SignupForm;
