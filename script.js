// Calculator functions
function add(x, y) { return x + y }
function sub(x, y) { return x - y }
function mul(x, y) { return x * y }
function div(x, y) { return x / y }

function operate(operator, x, y) { return operator(x, y) }

// Web functionality
const screen = document.querySelector('.screen');

const numButtons = document.querySelector('.numbers');
numButtons.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        screen.value += e.target.textContent;
    }
});
