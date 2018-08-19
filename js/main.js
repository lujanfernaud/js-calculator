class Calculator {
  constructor() {
    this.toDisplay = []
    this.screen = document.getElementById('screen')
    this.buttons = document.querySelectorAll('#button')
    this.buttonExecute = document.getElementById('button-execute')
    this.buttonClear = document.getElementById('button-clear')
  }

  start() {
    this.watch()
  }

  watch() {
    this.watchNormalButtons()
    this.watchExecuteButton()
    this.watchClearButton()
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

  watchExecuteButton() {
    this.buttonExecute.addEventListener('click', () => {
      console.log('Execute')
    })
  }

  watchClearButton() {
    this.buttonClear.addEventListener('click', () => {
      this.toDisplay = []
      this.screen.innerHTML = [0]
    })
  }

  operate(operator, number1, number2) {
    switch (operator) {
      case '+':
        return this.add(number1, number2)
      case '-':
        return this.subtract(number1, number2)
      case '*':
        return this.multiply(number1, number2)
      case '/':
        return this.divide(number1, number2)
      default:
        return this.notValid()
    }
  }

  add(number1, number2) {
    return number1 + number2
  }

  subtract(number1, number2) {
    return number1 - number2
  }

  multiply(number1, number2) {
    return number1 * number2
  }

  divide(number1, number2) {
    return number1 / number2
  }

  notValid() {
    return 'Not valid.'
  }
}

const calculator = new Calculator().start()
