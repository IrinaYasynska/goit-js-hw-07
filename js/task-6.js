const inputValue = document.querySelector(`#validation-input`);

inputValue.addEventListener('blur', validationAmountSymbol);

function validationAmountSymbol() {
    if (inputValue.value.length == inputValueEl.dataset.length) {
        inputValue.classList.add("valid");
        inputValue.classList.remove("invalid");
    }
    if (inputValue.value.length != inputValueEl.dataset.length) {
        inputValue.classList.add("invalid");
        inputValue.classList.remove("valid");
    }
    if (inputValue.value.length == 0) {
        inputValue.classList.remove("invalid");
    }
}
