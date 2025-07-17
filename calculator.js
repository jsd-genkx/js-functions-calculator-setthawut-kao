"use strict";

// Step 01: Create Functions for Addition, Subtraction, Multiplication, and Division

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Cannot divide by zero";
  }
  return num1 / num2;
}

// Step 02: Create a Validation Function for Inputs

function validateInputs(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Both inputs must be numbers";
  }
  return null;
}

// Step 03: Create a Calculator Function to Combine the Above Functions

function calculator(num1, num2, operation) {
  const validationError = validateInputs(num1, num2);
  if (validationError) {
    return validationError;
  }

  if (operation === "add") {
    return add(num1, num2);
  } else if (operation === "subtract") {
    return subtract(num1, num2);
  } else if (operation === "multiply") {
    return multiply(num1, num2);
  } else if (operation === "divide") {
    return divide(num1, num2);
  } else {
    return 'Invalid operation. Please use "add", "subtract", "multiply", or "divide".';
  }
}

console.log(add(10, 5));
console.log(validateInputs(10, "a"));
console.log(calculator(10, 5, "add"));
console.log(calculator(10, 5, "divide"));
console.log(calculator(10, 0, "divide"));
console.log(calculator(10, 5, "unknown"));
