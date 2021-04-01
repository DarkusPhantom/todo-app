import React, { Fragment } from "react";
import "./formInputs.css";

function FormInputs({ type, id, className, placeholder }) {
  return (
    <Fragment>
      <div className="signup-form-input">
        <input
          type={type}
          id={id}
          className={className}
          placeholder={placeholder}
        />
      </div>
    </Fragment>
  );
}

export default FormInputs;
