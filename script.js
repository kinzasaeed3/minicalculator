function calculateResult(operand1, operand2, operator) {
    if (operator === '+') {
        return operand1 + operand2;
    } else if (operator === '-') {
        // Ensure operand2 is less than operand1 for subtraction
        if (operand2 < operand1) {
            return operand1 - operand2;
        } else {
            return "Error: Operand2 must be less than Operand1 for subtraction.";
        }
    } else if (operator === '*') {
        return operand1 * operand2;
    } else if (operator === '/') {
        // Ensure operand2 is not zero for division
        if (operand2 !== 0) {
            return operand1 / operand2;
        } else {
            return "Error: Cannot divide by zero.";
        }
    }
}

function calculateAndDisplayResult(operator) {
    // Get user input
    var operand1 = parseFloat(prompt("Enter the first operand:"));
    var operand2 = parseFloat(prompt("Enter the second operand:"));

    // Calculate the result
    var result = calculateResult(operand1, operand2, operator);


    var resultDisplayH1 = document.getElementById("resultDisplayH1");
    var resultDisplayP = document.getElementById("resultDisplayP");

    if (result !== null) {
        resultDisplayH1.innerHTML = `The result of ${operand1} ${operator} ${operand2} is: ${result}`;
        resultDisplayP.innerHTML = `Result: ${result}`;
    } else {
        resultDisplayH1.innerHTML = "Error: Please check your input.";
        resultDisplayP.innerHTML = "Error: Please check your input.";
    }
}