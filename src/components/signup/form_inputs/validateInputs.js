function ValidateField(e) {
  const input = e.target
  const inputField = input.parentElement

  if(input.value.length > 0) {
    inputField.classList.remove('error')
  } else {
    inputField.classList.add('error')
    const error = createError(input.placeholder)
    error.forEach( (err) => inputField.appendChild(err) )
  }

  function createError(inputPlaceholder) {
    const span = document.createElement('span')
    const img = document.createElement('img')
    const p = document.createElement('p')
    const em = document.createElement('em')

    span.className = 'input-error';
    img.className = 'input-icon';
    p.className = 'input-error-text'

    img.setAttribute('src','../../images/icon-error.svg')

    inputPlaceholder === 'Email' ? em.innerText = `Looks like this is not an ${inputPlaceholder}` :  em.innerText = `${inputPlaceholder} cannot be empty`

    span.appendChild(img)
    p.appendChild(em)

    const error = []
    error.push(span)
    error.push(p)

    return error;
  }
}

export default ValidateField
