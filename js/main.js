const OPERATIONS = /(\d+\D\d+)(\D\d+)?(\D\d+)?(\D\d+)?(\D\d+)?/

class Calculator {
  constructor() {
    this.toDisplay = []
    this.toExecute = []
    this.result = 0

    this.screen = document.getElementById('screen')
    this.buttons = document.querySelectorAll('#button')
    this.buttonExecute = document.getElementById('button-execute')
    this.buttonClear = document.getElementById('button-clear')
  }

  start() {
    this.watchNormalButtons()
    this.watchClearButton()
    this.watchExecuteButton()
  }

  watchNormalButtons() {
    this.buttons.forEach(button => {
      let buttonValue = button.dataset.value

      button.addEventListener('click', () => {
        this.toDisplay.push(buttonValue)
        this.displayValues()
      })
    })
  }

  displayValues() {
    this.screen.innerHTML = this.toDisplay.join('')
  }

  watchClearButton() {
    this.buttonClear.addEventListener('click', () => {
      this.clearState()
    })
  }

  clearState() {
    this.toDisplay = []
    this.screen.innerHTML = [0]
  }

  watchExecuteButton() {
    this.buttonExecute.addEventListener('click', () => {
      this.prepareOperationsToExecute()
      this.executeOperations()
      this.displayResult()
    })
  }

  prepareOperationsToExecute() {
    const operations = this.toDisplay.join('')

    this.toExecute = operations
      .match(OPERATIONS)
      .slice(1)
      .filter(item => item !== undefined)
  }

  executeOperations() {
    while (this.toExecute.length > 0) {
      let operation = this.toExecute.shift()
      let operator = operation.match(/\D/)[0]
      let values = operation.match(/\d+/g)

      if (values.length > 1) {
        this.operate(operator, values[0], values[1])
      } else {
        this.operate(operator, this.result, values[0])
      }
    }
  }

  displayResult() {
    if (this.result === 0) { this.clearState() }

    if (isInteger(this.result)) {
      this.screen.innerHTML = this.result
    } else {
      this.screen.innerHTML = this.result.toFixed(2)
    }
  }

  operate(operator, value1, value2) {
    switch (operator) {
      case '%':
        return this.modulo(value1, value2)
      case '+':
        return this.add(value1, value2)
      case '-':
        return this.subtract(value1, value2)
      case '*':
        return this.multiply(value1, value2)
      case '/':
        return this.divide(value1, value2)
      default:
        return this.notValid()
    }
  }

  modulo(value1, value2) {
    this.result = Number(value1) % Number(value2)
    this.toDisplay = [this.result]
  }

  add(value1, value2) {
    this.result = Number(value1) + Number(value2)
    this.toDisplay = [this.result]
  }

  subtract(value1, value2) {
    this.result = Number(value1) - Number(value2)
    this.toDisplay = [this.result]
  }

  multiply(value1, value2) {
    this.result = Number(value1) * Number(value2)
    this.toDisplay = [this.result]
  }

  divide(value1, value2) {
    this.result = Number(value1) / Number(value2)
    this.toDisplay = [this.result]
  }

  notValid() {
    this.screen.innerHTML = 'Not valid.'
    this.toDisplay = 0
  }
}

function isInteger(value) {
  return Math.round(value) === value
}

const calculator = new Calculator().start()
