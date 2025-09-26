const greetingHeader = document.getElementById('greeting-header');
const nameInput = document.getElementById('name-input');
const greetButton = document.getElementById('greet-button');
const colorBoxes = document.querySelectorAll('.color-box');

greetButton.addEventListener('click', () => {
    const userName = nameInput.value.trim();
    if (userName) {
        greeting.textContent = `Hello, ${userName}!`;
    } else {
        greeting.textContent = 'Hello, World';
    }
});

nameInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        greetButton.click();
    }
});

colorBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const color = box.textContent;
        box.style.backgroundColor = color;
        if(color === 'red' || color === 'blue' || color === 'green'){
            box.style.color = 'white';
        } else if (color === 'yellow'){
            box.style.color = 'black';
        }
    });
});
