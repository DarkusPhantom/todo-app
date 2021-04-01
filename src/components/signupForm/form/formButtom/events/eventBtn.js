import iconError from "../icon/icon-error.svg";

const Alarm = (event) => {
  event.preventDefault();
  const inputs = event.target.parentElement.querySelectorAll(
    "div.signup-form-input"
  );

  checkForm(inputs);
  if (!areEmptyInputs(inputs)) {
    alert("Login Completado");
  }
};

const areEmptyInputs = (inputsForm) => {
  let areEmpty = false;

  inputsForm.forEach((inputs) => {
    let input = inputs.querySelector("input.input");
    let inputValue = input.value;

    if (inputValue === null || inputValue.length === 0) {
      areEmpty = true;
    }
  });

  return areEmpty;
};

const checkForm = (inputsForm) => {
  inputsForm.forEach((input) => {
    let inputValue = input.children[0].value;

    if (inputValue === null || inputValue.length === 0) {
      showError(input);
    } else {
      removeError(input);
    }
  });
};

const showError = (input) => {
  const inputErrorExist = input.children[0].classList.contains("error");

  if (!inputErrorExist) {
    input.classList.add("error");
    createErrorIcon(input);

    if (input.childElementCount === 2) {
      const placeholder = input.children[0].placeholder;

      createErrorText(input, placeholder);
    }
  }
};

// Funcion que Crea el icono de error y lo coloca en el input
const createErrorIcon = (input) => {
  const img = document.createElement("img");
  const div = document.createElement("div");

  img.className = "input-icon";
  img.setAttribute("src", iconError);

  div.className = "input-error";
  div.appendChild(img);

  input.appendChild(div);
};

// Funcion que crea el texto de error y lo coloca debajo del input
const createErrorText = (input, placeholder) => {
  const p = document.createElement("p");
  const em = document.createElement("em");

  //Crea el texto de error
  placeholder === "Email"
    ? (em.innerText = `Looks like this is not an ${placeholder}`)
    : (em.innerText = `${placeholder} cannot be empty`);

  //Coloca el texto de error en la etiqueta <p>
  p.className = "input-error-text";
  p.appendChild(em);

  //Coloca el parrafo debajo del input
  input.appendChild(p);
};

//Remueve el texto y el icono de error del input
const removeError = (input) => {
  const inputErrorExist = input.classList.contains("error");
  const inputLength = input.children[0].length;
  console.log(input.children);

  if (inputErrorExist || inputLength === 0) {
    for (var i = input.children.length - 1; i >= 0; i--) {
      if (i > 0) {
        input.children[i].remove();
      }
    }
    input.classList.remove("error");
  }
};

export default Alarm;
