import { removeError } from "../form_inputs/validateInputs";

const Alarm = (event) => {
  event.preventDefault();
  const input = event.target.parentElement;
  clearForm(input);
  alert("Tu registro se ha completado");
};

const clearForm = (input) => {
  for (var i = input.children.length - 3; i >= 0; i--) {
    if (inputHasError(input.children[i])) {
      removeError(input.children[i]);
    }
  }
};

const inputHasError = (input) => {
  let hasError = false;
  if (input.classList.contains("error")) {
    hasError = true;
  }
  return hasError;
};

export default Alarm;
