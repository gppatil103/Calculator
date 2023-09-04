const result = document.getElementById('result');
let isNewCalculation = true; // Flag to track if it's a new calculation

function appendValue(value) {
  if (isNewCalculation) {
    result.value = value; // Start a new calculation
    isNewCalculation = false;
  } else {
    result.value += value; // Append to the existing expression
  }
}

function calculate() {
  try {
    result.value = eval(result.value);
    isNewCalculation = true; // Set the flag to start a new calculation after displaying the answer
  } catch (error) {
    result.value = 'Error';
  }
}

function clearResult() {
  result.value = '';
  isNewCalculation = true; // Set the flag to start a new calculation after clearing
}

document.querySelectorAll('.number-btn, .operator-btn, .decimal-btn').forEach((button) => {
  button.addEventListener('click', () => {
    appendValue(button.innerText);
  });
});

document.querySelector('.equal-btn').addEventListener('click', calculate);

document.querySelector('.clear-btn').addEventListener('click', clearResult);

