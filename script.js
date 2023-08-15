let currentInput = "";
let operator = "";
let firstOperand = "";
let secondOperand = "";

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(op) {
  operator = op;
  firstOperand = currentInput;
  currentInput = "";
  updateDisplay();
}

function calculate() {
  secondOperand = currentInput;
  let result = "";

  switch (operator) {
    case "+":
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case "-":
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case "*":
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case "/":
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
  }

  currentInput = result.toString();
  operator = "";
  firstOperand = "";
  secondOperand = "";

  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  operator = "";
  firstOperand = "";
  secondOperand = "";
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = currentInput;
}
