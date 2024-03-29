//Query Selectors
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
         this.previousOperandTextElement = previousOperandTextElement;
         this.currentOperandTextElement = currentOperandTextElement;
         this.clear()
    }

    delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = '';
        }

    appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
        this.compute()
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
    }

    compute() {
    let computation;
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
        case '+':
        computation = prev + current;
        break;
        case '-':
        computation = prev - current;
        break;
        case '*':
        computation = prev * current;
        break;
        case '/':
        computation = prev / current;
        break;
        default:
        return
       }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';

   }

    updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    if (this.operation !== undefined) {
        this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
      }
   }
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

//Number buttons
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

document.addEventListener('keydown', event => {
   switch (event.key) {
       case '0':
       calculator.appendNumber(0)
       calculator.updateDisplay()
       break;
       case '1':
       calculator.appendNumber(1)
       calculator.updateDisplay()
       break;
       case '2':
       calculator.appendNumber(2)
       calculator.updateDisplay()
       break;
       case '3':
       calculator.appendNumber(3)
       calculator.updateDisplay()
       break;
       case '4':
       calculator.appendNumber(4)
       calculator.updateDisplay()
       break;
       case '5':
       calculator.appendNumber(5)
       calculator.updateDisplay()
       break;
       case '6':
       calculator.appendNumber(6)
       calculator.updateDisplay()
       break;
       case '7':
       calculator.appendNumber(7)
       calculator.updateDisplay()
       break;
       case '8':
       calculator.appendNumber(8)
       calculator.updateDisplay()
       break;
       case '9':
       calculator.appendNumber(9)
       calculator.updateDisplay()
       break;
       case '.':
       calculator.appendNumber('.')
       calculator.updateDisplay()
       break;
   }
})

//Operation buttons
operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

document.addEventListener('keydown', event => {
    switch(event.key) {
        case '+':
            calculator.chooseOperation('+')
            calculator.updateDisplay()
            break;
        case '-':
            calculator.chooseOperation('-')
            calculator.updateDisplay()
            break;
        case '*':
            calculator.chooseOperation('*')
            calculator.updateDisplay()
            break;
        case '/':
            calculator.chooseOperation('/')
            calculator.updateDisplay()
            break;
    }
})

//Equals
equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

document.addEventListener('keydown', event => {
    if (event.key === '=') {
        calculator.compute();
        calculator.updateDisplay();
    }
})

//All Clear
allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})
document.addEventListener('keydown', event => {
    if (event.key === 'c') {
        calculator.clear();
        calculator.updateDisplay();
    }
})

//Delete
deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})

document.addEventListener('keydown', event => {
    if (event.key === 'Backspace') {
        calculator.delete();
        calculator.updateDisplay();
    }
})


