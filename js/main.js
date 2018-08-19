class Calculator {
  constructor() {
    this.display = 0
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

const calculator = new Calculator()
