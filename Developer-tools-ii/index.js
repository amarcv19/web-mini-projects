const url = "https://run.mocky.io/v3/511fa794-6bfb-4c9f-9adb-9e18d62d7003";
// endpoint to fetch content

// function to return the json response from the given endpoint
async function getApiData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// store the data , from getApiData() method to a variable apiData 

let apiData = await getApiData(url);
console.log(apiData);



// getTableRow() , returns a table row  , with columns title ,acRate and difficulty

const getTableRow = (title, acRate, difficulty)=>{

  const row = document.createElement('tr');
  row.innerHTML = `
  <td>${title}</td>
      <td>${acRate}</td>
      <td>${difficulty}</td>
  `;
  return row;
};

// get the table body with id = 'table-body';

const tableBody = document.getElementById('table-body');


// list of questions with 
const questionsList = apiData.problemsetQuestionList.questions;

// function to populate title, acRate and difficulty of each question of list to the table body
const populateTable = (tableBody,questionsList)=>{

  tableBody.innerText = "";
  questionsList.forEach(element =>{
    const newRow = getTableRow(element.title,element.acRate.toFixed(2),element.difficulty);
    tableBody.append(newRow);
  });
};


// call of function to populate table
populateTable(tableBody,questionsList);




/*
functionalties to sort problems based on acceptance rate 
acceptance element id  = 'act'


*/

const acceptanceHeader = document.querySelector('#questions-table > thead > tr > th:nth-child(2)');

acceptanceHeader.addEventListener('click',()=>{
  
  const sortedQuestionsList = sortQuestionsByAcceptanceRate(questionsList);
  populateTable(tableBody,sortedQuestionsList);
});



// function sortQuestionsByAcceptanceRate() to sort the problems list by acceptance rate

const sortQuestionsByAcceptanceRate  = (arr)=>{

  let ans = [...arr];

  ans.sort((obj1,obj2)=>{
    return obj2.acRate - obj1.acRate;
  });

  return ans;
}


