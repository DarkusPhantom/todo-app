import iconError from "../../images/icon-error.svg";

const ValidateField = ({ target: { value, placeholder, parentElement } }) => {
  const input = parentElement;

  if (value === null || value.length === 0) {
    showError(input, placeholder);
  } else {
    removeError(input);
  }
};

const showError = (input, placeholder) => {
  const inputErrorExist = input.classList.contains("error");

  if (!inputErrorExist) {
    input.classList.add("error");
    createErrorIcon(input);
    createErrorText(input, placeholder);
  }
};

const createErrorIcon = (input) => {
  const img = document.createElement("img");
  const div = document.createElement("div");

  img.className = "input-icon";
  img.setAttribute("src", iconError);

  div.className = "input-error";
  div.appendChild(img);
  input.appendChild(div);
};

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

const removeError = (input) => {
  const inputErrorExist = input.classList.contains("error");
  if (inputErrorExist) {
    for (var i = input.children.length - 1; i >= 0; i--) {
      if (i > 0) {
        input.children[i].remove();
      }
    }
    input.classList.remove("error");
  }
};

export { ValidateField as default, removeError };
