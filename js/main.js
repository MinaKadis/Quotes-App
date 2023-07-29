const quotesArray = [
  {
    author: "― Oscar Wilde",
    quote: "“Be yourself; everyone else is already taken.”",
    img: "https://images.gr-assets.com/authors/1673611182p8/3565.jpg",
    bgImg: "url('images/svg1.png')",
  },
  {
    author: "― Marilyn Monroe",
    quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677906581i/75980619.jpg",
    bgImg: "url('images/svg2.png')",
  },
  {
    author: "― Albert Einstein",
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    img: "https://images.gr-assets.com/authors/1429114964p5/9810.jpg",
    bgImg: "url('images/svg15.png')",
  },
  {
    author: "― Frank Zappa",
    quote: "“So many books, so little time.”",
    img: "https://images.gr-assets.com/authors/1315160559p5/22302.jpg",
    bgImg: "url('images/svg4.png')",
  },
  {
    author: "― Marcus Tullius Cicero",
    quote: "“A room without books is like a body without a soul.”",
    img: "https://covers.openlibrary.org/a/id/5726480-M.jpg",
    bgImg: "url('images/svg5.png')",
  },
  {
    author: "― Bernard M. Baruch",
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    img: "https://images.gr-assets.com/authors/1331977133p5/5768330.jpg",
    bgImg: "url('images/svg6.png')",
  },
  {
    author: "― William W. Purkey",
    quote: `“You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.”`,
    img: "https://images.gr-assets.com/authors/1282396130p8/1744830.jpg",
    bgImg: "url('images/svg7.png')",
  },
  {
    author: "― Dr. Seuss",
    quote:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    img: "https://images.gr-assets.com/authors/1193930952p5/61105.jpg",
    bgImg: "url('images/svg8.png')",
  },
  {
    author: "― Mae West",
    quote: "“You only live once, but if you do it right, once is enough.”",
    img: "https://images.gr-assets.com/authors/1198551937p5/259666.jpg",
    bgImg: "url('images/svg9.png')",
  },
  {
    quote:
      "“It is our choices, Harry, that show what we truly are, far more than our abilities.”",
    author: "― J.K. Rowling",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1596216614i/1077326._UX200_CR0,15,200,200_.jpg",
    bgImg: "url('images/svg1.png')",
  },
  {
    quote: "“A friend is someone who knows all about you and still loves you.”",
    author: "― Elbert Hubbard",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1216826209i/114059._CR0,24,200,200_.jpg",
    bgImg: "url('images/svg2.png')",
  },
  {
    quote: "“We accept the love we think we deserve.”",
    author: "― Stephen Chbosky",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1599132962i/12898._UX200_CR0,25,200,200_.jpg",
    bgImg: "url('images/svg15.png')",
  },
  {
    quote:
      "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    author: "― Ralph Waldo Emerson",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1393555704i/12080._UX200_CR0,34,200,200_.jpg",
    bgImg: "url('images/svg4.png')",
  },
  {
    quote:
      "“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”",
    author: "― Bill Keane",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1320885123i/3230608._UY200_CR21,0,200,200_.jpg",
    bgImg: "url('images/svg5.png')",
  },
  {
    quote:
      "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    author: "― Ralph Waldo Emerson",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1393555704i/12080._UX200_CR0,34,200,200_.jpg",
    bgImg: "url('images/svg6.png')",
  },
  {
    quote:
      "“I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.”",
    author: "― Dr. Seuss",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1193930952i/61105._UX200_CR0,30,200,200_.jpg",
    bgImg: "url('images/svg7.png')",
  },
  {
    quote: "“That which does not kill us makes us stronger.”",
    author: "― Friedrich Nietzsche",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1651474065i/1938._UX200_CR0,35,200,200_.jpg",
    bgImg: "url('images/svg8.png')",
  },
  {
    quote: "“It is never too late to be what you might have been”",
    author: "― George Eliot",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1596202587i/173._UX200_CR0,2,200,200_.jpg",
    bgImg: "url('images/svg9.png')",
  },
  {
    quote: "“If you judge people, you have no time to love them.”",
    author: "― Mother Teresa",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1263888735i/838305._UX200_CR0,7,200,200_.jpg",
    bgImg: "url('images/svg10.png')",
  },
  {
    quote:
      "“If you can't explain it to a six year old, you don't understand it yourself.”",
    author: "― Albert Einstein",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1429114964i/9810._UX200_CR0,14,200,200_.jpg",
    bgImg: "url('images/svg11.png')",
  },
  {
    quote: "“Everything you can imagine is real.”",
    author: "― Pablo Picasso",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1684536524i/3253._UX200_CR0,40,200,200_.jpg",
    bgImg: "url('images/svg12.png')",
  },
  {
    quote: "“We don't see things as they are, we see them as we are.”",
    author: "― Anaïs Nin",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1585811222i/7190._UX200_CR0,18,200,200_.jpg",
    bgImg: "url('images/svg13.png')",
  },
];

const authorImg = document.getElementById("authorImg");
const quoteCaption = document.getElementById("quoteCaption");

let previousQuote = -1;
var randomIndex = 1;
generateQuote();
function generateQuote() {
  debugger;

  getRandomNumber();

  const randomQuoteObject = quotesArray[randomIndex];
  const randomQuote = randomQuoteObject.quote;
  const randomAuthor = randomQuoteObject.author;
  authorImg.innerHTML = `<img src="${quotesArray[randomIndex].img}" alt="${quotesArray[randomIndex].author}-img" class="rounded-circle"></img>`;
  getRandomBG(randomIndex);

  //console.log(`"${randomQuote}" - ${randomAuthor}`);

  document.querySelector("#quoteOutput").textContent = randomQuote;
  document.querySelector("#authorOutput").textContent = randomAuthor;

  previousQuote = randomIndex;
}

function generateQuoteWithAPI() {
  debugger;
  getRandomNumber();
  authorImg.innerHTML = " ";
  getRandomBG(randomIndex);
  const button = document.querySelector("#button");
  const p = document.querySelector("#quoteOutput");
  document.querySelector("#authorOutput").textContent =
    "― From quotable.io Site with API";
  const API = "https://api.quotable.io/random";
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      p.textContent = `\"${data.content}\"`;
    })
    .catch(() => alert("Error fetching Quote!"));
}

function getRandomBG(index) {
  quoteCaption.style.backgroundImage = quotesArray[index].bgImg;
  quoteCaption.style.backgroundSize = "100% 100%";
  quoteCaption.style.backgroundRepeat = "no-repeat";
  quoteCaption.style.backgroundPosition = "bottom center";
}

function getRandomNumber() {
  do {
    randomIndex = Math.floor(Math.random() * quotesArray.length);
  } while (randomIndex === previousQuote);
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
