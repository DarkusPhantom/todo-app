import React from 'react'
import SignupBox from './signup-box/signup-box.js'
import SignupForm from './form_inputs/form-inputs.js'
import FormBtnSend from './form_buttom/form-buttom.js'
import FormFooter from './form_footer/form-footer.js'
import './signup.css'
import dataInputs from './form_inputs/dataInputs'


function Signup() {
  return (
    <section className="signup">
      <SignupBox /> 
      <form id="form-signup" className="signup-form" action="">
        {
          dataInputs.map((input) => <SignupForm key={input.id_input} {...input} />)
        }
        <FormBtnSend />
        <FormFooter />
      </form>
    </section>
  );
}

export default Signup;
