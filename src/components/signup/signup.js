import React from 'react'
import SignupBox from './signup-box/signup-box.js'
import SignupForm from './form_inputs/form-inputs.js'
import FormBtnSend from './form_buttom/form-buttom.js'
import FormFooter from './form_footer/form-footer.js'
import './signup.css'

const formInputs = [
  {
    type: 'text',
    id_input: 'first-name',
    placeholder: 'First Name',
    input_error_text: 'First Name cannot be empty'
  },
  {
    type: 'text',
    id_input: 'last-name',
    placeholder: 'Last Name',
    input_error_text: 'Last Name cannot be empty'
  },
  {
    type: 'email',
    id_input: 'email',
    placeholder: 'placeholder',
    input_error_text: 'Looks like this is not an email'
  },
  {
    type: 'password',
    id_input: 'password',
    placeholder: 'Password',
    input_error_text: 'Password cannot be empty'
  }
]


function Signup() {
  return (
    <section className="signup">
      <SignupBox /> 
      <form id="form-signup" className="signup-form" action="">
        {
          formInputs.map((input) => <SignupForm key={input.id_input} {...input} />)
        }
        <FormBtnSend />
        <FormFooter />
      </form>
    </section>
  );
}

export default Signup;
