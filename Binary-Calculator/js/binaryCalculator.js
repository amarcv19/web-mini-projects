// data object to store the input from the buttons
const data = {
  first: null,
  op: null,
  second: null,
};

//get the result bar node with id = res
const result = document.getElementById("res");

// add event listener on button 0 , id = btn0
// if clicked it should append 0 in the result content

const btn0 = document.getElementById("btn0");
btn0.addEventListener("click", () => {
  result.innerText = result.innerText + "0";
});

// add event listener on button 1 , id = btn1
// if clicked it should append 1 in the result content

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
  result.innerText = result.innerText + "1";
});

/*
  if any of the operator button is pressed , say 
  it + , - , * , /

  data object should update its first operand , then
  append operator in the content of the result

*/

// event for plus button
const plus = document.getElementById("btnSum");
plus.addEventListener("click", () => {
  let ch = result.innerText[result.innerText.length - 1];

  if (ch === "+" || ch === "-" || ch === "*" || ch === "/" || ch === '=') return;
  data.first = result.innerText;
  data.op = '+';
  result.innerText += "+";
});

// event for minus button

const minus = document.getElementById("btnSub");

minus.addEventListener("click", () => {
  let ch = result.innerText[result.innerText.length - 1];

  if (ch === "+" || ch === "-" || ch === "*" || ch === "/" || ch === "=")
    return;
  data.first = result.innerText;
  data.op = '-';
  result.innerText += "-";
});

// event for multiply button
const multiply = document.getElementById("btnMul");

multiply.addEventListener("click", () => {
  let ch = result.innerText[result.innerText.length - 1];

  if (ch === "+" || ch === "-" || ch === "*" || ch === "/" || ch === "=")
    return;
  data.first = result.innerText;
  data.op = '*';
  result.innerText += "*";
});

// event for divison button
const division = document.getElementById("btnDiv");

division.addEventListener("click", () => {
  let ch = result.innerText[result.innerText.length - 1];

  if (ch === "+" || ch === "-" || ch === "*" || ch === "/" || ch === '=') return;
  data.first = result.innerText;
  data.op = '/';
  result.innerText += "/";
});

// add event listener on clear button with id = btnClr

const clearResult = document.getElementById("btnClr");

clearResult.addEventListener("click", () => {
  data.first = null;
  data.op = null;
  data.second = null;

  result.innerText = "";
});


/*

add event listener on = button with id = btnEql to evaluate the expression

*/



const eval = document.getElementById('btnEql');

eval.addEventListener('click' , ()=>{

  // if the last character in the expression is an operator , do nothing 
  let ch = result.innerText[result.innerText.length - 1];

  if (ch === "+" || ch === "-" || ch === "*" || ch === "/" || ch === "=")
    return;

  // get the first operand

  let index = data.first.length + 1;
  data.second = result.innerText.substring(index);

  let firstNumberInDecimal = parseInt(data.first,2);

  // get the second operand 
  let secondNumberInDecimal = parseInt(data.second,2);

  // evaluate the expression by converting both the number in decimal format

  let answer = evalResult(firstNumberInDecimal,secondNumberInDecimal,data.op);

  // convert the final answer to binary format , 
  answer = answer.toString(2);

  // show the result to the DOM , result bar with id  = 'res'
  result.innerText = answer;

  // update data objects to null 
  data.first = null;
  data.second = null;
  data.op = null;

  
});


// method to get the calculation done for addition , subtraction , division , and multiplication 
const evalResult = (num1,num2,operator)=>{

  switch (operator) {
    
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      let ans = num1 / num2;
      ans = Math.floor(ans);
      return ans;
  }
}
