function operate(numOne, operator, numTwo){
  if (operator === "x")
  {
    return multiply(numOne, numTwo);
  }
  else if(operator === "%"){
    return divide(numOne, numTwo);
  }
  else if(operator === "+"){
    return add(numOne, numTwo);
  }
  else if(operator === "-"){
    return subtract(numOne, numTwo);
  }

}

function add(numOne, numTwo){
  return numOne + numTwo;
}

function subtract(numOne, numTwo){
  return numOne - numTwo;
}

function multiply(numOne, numTwo){
  return numOne * numTwo;
}

function divide(numOne, numTwo){
  if (numTwo === 0)
  {
    return "ERROR";
  }
  return numOne / numTwo;
}