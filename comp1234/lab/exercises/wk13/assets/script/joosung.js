let total = 0;
const operators = ["+", "-", "*", "/"];

let operation = parseInt(prompt(`Menu \n 1. + \n 2. - \n 3. * \n 4. /`));
let num1 = parseInt(prompt("Enter your first number"));
let num2 = parseInt(prompt("Enter your second number"));

switch (operation) {
  case 1:
    total = num1 + num2;
    break;
  case 2:
    total = num1 - num2;
    break;
  case 3:
    total = num1 * num2;
    break;
  case 4:
    total = num1 / num2;
    break;
  default:
    document.getElementById(
      "displayTotal"
    ).innerHTML = `Invalid menu number. please enter a number between 1 and 4`;
}

document
  .getElementById("displayTotal")
  .append(` ${num1} ${operators[operation - 1]} ${num2} = ${total}`);
