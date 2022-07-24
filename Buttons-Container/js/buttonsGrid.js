// get the body node from the DOM

const body  = document.body;

// make a div container for all the buttons , container id = 'btns'

const div = document.createElement('div');
div.id = "btns";


// make 9 buttons with button id like btn1 , btn2 , btn3 ... with for loop and append to div container

for(let i = 1;i<=9;i++){
  const buttonElement = document.createElement('button');
  buttonElement.innerText = i;
  buttonElement.id = "btn"+i;
  buttonElement.setAttribute("class","btn");
  div.appendChild(buttonElement);
}

// make an array of content of buttons in clockwise direction
const arr = [1,2,3,6,9,8,7,4];

const rotateByOne = (arr)=>{
  arr.unshift(arr.pop());
};
// [4,1,2,3,6,9,8,7];

// appedn the div container to the dom

body.append(div);

// add 'click ' event listener on button with id btn5

const targetButton = document.getElementById("btn5");
targetButton.addEventListener('click',()=>{
  rotateByOne(arr);
  for(let i = 0;i<3;i++){
    const currentButton = document.getElementById("btn"+(i+1));
    currentButton.innerText = arr[i];
  }

  let currentButton = document.getElementById("btn4");
  currentButton.innerText = arr[arr.length-1];


  currentButton = document.getElementById("btn6");
  currentButton.innerText = arr[3];


  let cnt = 9;

  for(let i = 4;i<=6;i++){
    const currentButton = document.getElementById("btn"+cnt);
    currentButton.innerText = arr[i];
    cnt--;
  }

});


