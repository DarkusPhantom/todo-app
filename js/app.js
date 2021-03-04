(function() {
  //Variables
  const form = document.getElementById('form-signup')
  const inputFirstName = document.getElementById('first-name')
  const inputLastName = document.getElementById('last-name')
  const inputEmail = document.getElementById('email')
  const inputPassword = document.getElementById('password')
  const btnSend = document.getElementById('send')


  //EventListener
  inputFirstName.addEventListener('blur', validateField)

  inputLastName.addEventListener('blur', validateField)

  inputEmail.addEventListener('blur', validateField)

  inputPassword.addEventListener('blur', validateField)

  form.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log('aa')
  })


  //Functions
  function validateField(e) {
    validateLenght(this, e.target)
  }
  
  function validateLenght(field, input) {
    const inputField = input.parentElement
    const inputIconError = inputField.children[1]
    const inputTextError = inputField.children[2]


    if(field.value.length > 0) {
      inputField.classList.remove('error')
      inputIconError.classList.add('hidden')
      inputTextError.classList.add('hidden')
      input.style.border = '1px solid var(--color-grayish-blue)'
    } else {
      inputField.classList.add('error')
      inputIconError.classList.remove('hidden')
      inputTextError.classList.remove('hidden')
      input.style.border = 'none' 
    }
  }

}())
