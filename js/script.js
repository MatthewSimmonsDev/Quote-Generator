/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 Array of quotation objects.   
***/
const quotes = [
  {quote: "Hello there.",
  source: "Obi-Wan Kenobi",
  citation: "Revenge of the Sith",
  year: "2005",
  directedTo: "To General Grievous"},

  {quote: "A wizard is never late, nor is he early. He arrives precisely when he means to.",
  source: "Gandalf",
  citation: "The Fellowship of the Ring",
  year: "2001",
  directedTo: "To Frodo"},

  {quote: "The ships hung in the sky in much the same way that bricks don't.",
  source: "Douglas Adams",
  citation: "The Hitchhikers Guide to the Galaxy",
  year: "1979"
  },

  {quote: "War. War never changes.",
  source: "Ron Perlman as Narrator",
  citation: "Fallout game series",
  year: "1997+"

  },

  {quote: "I'm from Buenos Aires, and I say kill 'em all.",
  source: "Johnny Rico",
  citation: "Starship Troopers",
  year: "23rd century"
  }
]


/***
 Generates a random number based on the length of the quotes array.
 Then uses that number to return a random quote.
***/
function getRandomQuote(){
  const randomNumber = Math.floor(Math.random() * quotes.length);
  let quotation = quotes[randomNumber];
  
  return quotation;
 

}


/***
 Displays quote that was picked in getRandomQuote function.
 Also calls changeBackgroundColor function.
***/
function printQuote(){
  let randomQuote = getRandomQuote();
  let htmlString = `<p class="quote">${randomQuote.quote}</p>
                    <p class="source">${randomQuote.source}`;
                    
                    if(randomQuote.citation){
                      htmlString += `<span class="citation">${randomQuote.citation}`
                    }
                    if(randomQuote.year){
                      htmlString += `<span class="year">${randomQuote.year}`;
                    }
                    if(randomQuote.directedTo){
                      htmlString += `<span class="directed-to">\u00A0\,${randomQuote.directedTo}`;
                    }

                    htmlString += `</p>`;

    changeBackgroundColor();

    document.getElementById('quote-box').innerHTML = htmlString;
}

// Changes the color of the background with each quote.
function changeBackgroundColor(){
  
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  
  document.body.style.background = bgColor;
    
}

// Sets an interval of 4 seconds to call printQuote function, changing displayed quote.
setInterval(() => {
  printQuote();
}, 4000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);