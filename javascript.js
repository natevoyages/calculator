let numOne = "";
let numTwo = "";
let currentOperator = "";
let isSolution = false;

display = document.querySelector(".display");
buttons = document.querySelectorAll("button");
buttons.forEach(button => { button.addEventListener('click', setDisplay)
  
});

function setDisplay(){
  let input = this.innerText;

  if(/CE/.test(input)){
    display.textContent = "";
    numOne = "";
    numTwo = "";
    currentOperator = "";
    isSolution = false;
  }

  if(currentOperator === "" && !isSolution){
    if(/[0-9]/.test(input)){
      display.textContent = display.textContent + input;
      numOne = display.textContent;
    }
    else{
      if(numOne !== ""){
      currentOperator = input;
      }
    }
  }
  else if(currentOperator === "" && isSolution && numTwo === "" && /[^0-9]/.test(input)){
    currentOperator = input;
  }
  else if(/[x+-÷]/.test(currentOperator)){
    if(/[0-9]/.test(input)){
      if (numTwo === ""){
       display.textContent = input;
       numTwo = display.textContent;
      }
      else{
        display.textContent += input; 
        numTwo = display.textContent;
      }
    }
    else if(/[x+-÷=]/.test(input) && numTwo !== ""){
      display.textContent = operate(numOne, currentOperator, numTwo)
      numOne = display.textContent;
      numTwo = "";
      if(/[=]/.test(input)){
        currentOperator = "";
      }
      else{
        currentOperator = input;
      }
      isSolution = true;
    }
  }

}

function operate(numOne, operator, numTwo){
  if (operator === "x")
  {
    return multiply(numOne, numTwo);
  }
  else if(operator === "÷"){
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
  return +numOne + +numTwo;
}

function subtract(numOne, numTwo){
  return numOne - numTwo;
}

function multiply(numOne, numTwo){
  return numOne * numTwo;
}

function divide(numOne, numTwo){
  if (numTwo === "0")
  {
    return "ERROR";
  }
  return numOne / numTwo;
}