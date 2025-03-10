// Calculator functions
function add(x, y) { return x + y }
function sub(x, y) { return x - y }
function mul(x, y) { return x * y }
function div(x, y) { return x / y }

function operate(operator, x, y) { return operator(x, y) }

// Web functionality
const screen = document.querySelector('.screen');

const numButtons = document.querySelector('.numbers');
let clearFlag = false;
numButtons.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        if (clearFlag) {
            screen.value = '';
            clearFlag = false;
        }
        // If an operation just happened and we 
        // register a number, clear everything
        if (operator == operate) {
            screen.value = '';
            operator = arg1 = arg2 = null;
        }

        let writeVal = e.target.value;
        // Don't allow multiple decimals
        if (writeVal == '.' && screen.value.includes('.')) {
            return;
        }
        if (writeVal == '-') {
            if (screen.value == '') {
                return;
            }
            if (screen.value[0] == '-') {
                screen.value = screen.value.slice(1);
                return;
            }
            screen.value = '-' + screen.value;
            return;
        }
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
}
const parsedDisplay = document.querySelector('.parsed-display');
opButtons.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        let parsedScreenValue = parseFloat(screen.value);
        if (arg1 === null) {
            arg1 = parsedScreenValue;
        } else {
            arg2 = parsedScreenValue;
        }

        let opSymb = e.target.value;
        if (opSymb == '=') {
            let result = operate(operator, arg1, arg2);
            screen.value = result;
            parsedDisplay.textContent += `${arg2})`;
            operator = operate; // Flag that an operation just happened
            /*  
              We set arg1 to the result so that 
              if another operation key is pressed,
              that operation can use the result we 
              just calculated
            */
            arg1 = result;
        } else {
            operator = opMap[opSymb];
            parsedDisplay.textContent = `(${arg1} ${opSymb} `;
            clearFlag = true;
        }
    }
});

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    screen.value = '';
    parsedDisplay.textContent = '';
    operator = arg1 = arg2 = null;
});
