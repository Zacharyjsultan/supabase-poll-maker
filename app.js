import { fetchPolls, startNewPoll } from './fetch-utils.js';
import { renderPoll } from './render-utils.js';

// import functions and grab DOM elements
const createForm = document.getElementById('start-poll');
const voteA = document.getElementById('votes-a');
const voteB = document.getElementById('votes-b');
const endPoll = document.getElementById('end-poll');

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

voteA.addEventListener('click', () => {
    optionVotesA++;
    // adding button function
    voteA.textContent = optionVotesA;
});

voteB.addEventListener('click', () => {
    optionVotesB++;
    //subtracting button function
    voteB.textContent = optionVotesB;
});

endPoll.addEventListener('click', async () => {
    console.log('clackety');
   // data from supabase transmit to javabase
    const data = {
        question,
        option_a: optionA,
        option_b: optionB,
        option_votes_a: optionVotesA,
        option_votes_b: optionVotesB,
    };
    const resp = await startNewPoll(data);
    question = '';
    optionA = '';
    optionB = '';

    optionVotesA = 0;
    optionVotesB = 0;
    resp;
    displayCurrentPoll();
    displayPolls();
});


function displayCurrentPoll() {
    console.log(displayCurrentPoll);
    const questionEl = document.getElementById('question');
    questionEl.textContent = question;
    const optionAEl = document.getElementById('option-a');
    optionAEl.textContent = optionA;
    const optionBEl = document.getElementById('option-b');
    optionBEl.textContent = optionB;

    voteA.textContent = optionVotesA;
    voteB.textContent = optionVotesB;
}

// u still need to display the polls from SUPAbase

async function displayPolls(){
    const pollList = document.getElementById('poll-list');
    pollList.textContent = '';
    const polls = await fetchPolls();
    for (let poll of polls) {
        const div = renderPoll(poll);
        pollList.append(div);
    }

}

displayPolls();