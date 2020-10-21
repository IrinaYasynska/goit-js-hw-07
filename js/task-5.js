const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),

};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.nameLabel.textContent = refs.input.value.length > 0 ? event.currentTarget.value : "незнакомец";
    console.log(event.currentTarget.value);
}

