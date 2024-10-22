let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let previousInput = '';

function appendNumber(number) {
    if (currentInput.length < 10) { // Limiting the input length
        currentInput += number;
        updateDisplay();
    }
}

function appendOperator(op) {
    if (currentInput !== '') {
        if (previousInput !== '' && operator !== null) {
            calculate();
        } else {
            previousInput = currentInput;
            currentInput = '';
        }
        operator = op;
    }
}

function appendDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    if (operator && previousInput !== '' && currentInput !== '') {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
        }

        currentInput = result.toString();
        operator = null;
        previousInput = '';
        updateDisplay();
    }
}

function updateDisplay() {
    display.innerText = currentInput === '' ? '0' : currentInput;
}
