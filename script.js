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

const opButtons = document.querySelector('.operations');   
let operator = arg1 = arg2 = null;
const opMap = {
    '+' : add,
    '-' : sub,
    '*' : mul,
    '/' : div,
    '=' : operate,
}
opButtons.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        let parsedScreenValue = parseInt(screen.value);
        if (arg1 === null) {
            arg1 = parsedScreenValue;
        } else {
            arg2 = parsedScreenValue;
        }

        let opSymb = e.target.value;
        if (opSymb == '=') {
            let result = operate(operator, arg1, arg2);
            screen.value = result;
            // Prepare for next inputs
            arg1 = result;
        } else {
            operator = opMap[opSymb];
            screen.value = '';
        }
    }
});

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', (e) => {
    screen.value = '';
    operator, arg1, arg2 = null;
});
