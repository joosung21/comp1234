let total = 0;
const operators = ["+", "-", "*", "/"];

let operation = parseInt(prompt(`Menu \n 1. + \n 2. - \n 3. * \n 4. /`));
let num1 = parseInt(prompt("Enter your first number"));
let num2 = parseInt(prompt("Enter your second number"));

if (operation == 1) {
  total = num1 + num2;
} else if (operation == 2) {
  total = num1 - num2;
} else if (operation == 3) {
  total = num1 * num2;
} else if (operation == 4) {
  total = num1 / num2;
} else {
  alert("Invalid menu number. please enter a number between 1 and 4");
}

document.write(
  `<div style="font-size: 28px; font-weight:600; padding: 60px 40px">${num1} ${
    operators[operation - 1]
  } ${num2} = ${total}</div>`
);
