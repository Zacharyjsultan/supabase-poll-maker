// import functions and grab DOM elements
const createForm = document.getElementById('start-poll');
const voteA = document.getElementById('votes-a');
const voteB = document.getElementById('votes-b');

// let state
let question = '';
let optionA = '';
let optionB = '';
let optionVotesA = 0;
let optionVotesB = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(createForm);

    question = data.get('question-start');
    optionA = data.get('option-a');
    optionB = data.get('option-b');

    displayCurrentPoll();
});

function displayCurrentPoll() {
console.log(displayCurrentPoll);
    const questionEl = document.getElementById('id');
    questionEl.textContent = question;
    const optionAEl = document.getElementById('option-a');
    optionAEl.textContent = optionA;
    const optionBEl = document.getElementById('option-b');
    optionBEl.textContent = optionB;

    voteA.textContent = optionVotesA;
    voteB.textContent = optionVotesB;
}