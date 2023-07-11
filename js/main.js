const quotesArray = [
  {
    author: "― Oscar Wilde",
    quote: "“Be yourself; everyone else is already taken.”",
  },
  {
    author: "― Marilyn Monroe",
    quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
  },
  {
    author: "― Albert Einstein",
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  },
  {
    author: "― Frank Zappa",
    quote: "“So many books, so little time.”",
  },
  {
    author: "― Marcus Tullius Cicero",
    quote: "“A room without books is like a body without a soul.”",
  },
  {
    author: "― Bernard M. Baruch",
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  },
  {
    author: "― William W. Purkey",
    quote: `“You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.”`,
  },
  {
    author: "― Dr. Seuss",
    quote:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
  },
  {
    author: "― Mae West",
    quote: "“You only live once, but if you do it right, once is enough.”",
  },
];

let previousQuote = -1;
function generateQuote() {
  debugger;
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * quotesArray.length);
  } while (randomIndex === previousQuote);

  const randomQuoteObject = quotesArray[randomIndex];
  const randomQuote = randomQuoteObject.quote;
  const randomAuthor = randomQuoteObject.author;

  //console.log(`"${randomQuote}" - ${randomAuthor}`);

  document.querySelector("#quoteOutput").textContent = randomQuote;
  document.querySelector("#authorOutput").textContent = randomAuthor;

  previousQuote = randomIndex;
}

function generateQuoteWithAPI() {
  debugger;
  const button = document.querySelector("#button");
  const p = document.querySelector("#quoteOutput");
  document.querySelector("#authorOutput").textContent =
    "― From quotable.io Site with API";
  const API = "http://api.quotable.io/random";
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      p.textContent = `\"${data.content}\"`;
    })
    .catch(() => alert("Error fetching Quote!"));
}

// debugger;
// const button = document.querySelector("#button");
// const p = document.querySelector("#quoteOutput");
// document.querySelector("#authorOutput").textContent = "";
// const API = "http://api.quotable.io/random";

// button.addEventListener("click", () => {
//   fetch(API)
//     .then((res) => res.json())
//     .then((data) => {
//       p.textContent = data.content;
//     })
//     .catch(() => alert("Error fetching Quote!"));
// });
