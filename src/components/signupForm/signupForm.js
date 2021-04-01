import React from "react";
import "./signupForm.css";
import dataInputs from "./form/formInputs/data/dataInputs";
import FormInputs from "./form/formInputs/formInputs.js";
import FormBtnSend from "./form/formButtom/formButtom.js";
import FormFooter from "./form/formFooter/formFooter.js";

function Signup() {
  return (
    <section className="signup">
      <form id="form-signup" className="signup-form" action="">
        {dataInputs.map((input) => (
          <FormInputs key={input.id_input} {...input} />
        ))}
        <FormBtnSend />
      </form>
      <FormFooter />
    </section>
  );
}

export default Signup;
