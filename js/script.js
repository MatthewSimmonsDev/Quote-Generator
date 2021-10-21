/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

let quotation = '';

/*** 
 * `quotes` array 
***/
const quotes = [
  {quote: "Hello there."},
  {quote: "Hi There"}
]


/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  let randomNumber = Math.floor(Math.random() * quotes.length);
  quotation = quotes[randomNumber].quote;
  return quotation;
}


/***
 * `printQuote` function
***/
function printQuote(){
  let randomQuote = getRandomQuote();
  let htmlString = `<p class="quote">${randomQuote}</p>`;
  document.getElementById('quote-box').innerHTML = htmlString;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);