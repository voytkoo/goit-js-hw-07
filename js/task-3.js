const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', handler => {
    const trimmedInput = handler.target.value.trim();
    if (trimmedInput) {
        nameOutput.textContent = trimmedInput;
    } else {
        nameOutput.textContent = 'Anonymous'
     }
})
