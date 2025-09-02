const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// Destructuring
const books = getBooks();

const myBook = getBook(3);

const { title, author, genres, pages, publicationDate, hasMovieAdaptation } =
  myBook;
title;
author;

// const [primaryGenre, secondaryGenre] = [...myBook.genres];
const [primaryGenre, secondaryGenre] = genres;
console.log(primaryGenre, secondaryGenre);

//Rest operator
const [genre1, genre2, ...others] = genres;
console.log(genre1, genre2, others);

//Spread operator
const newGenresArray = [...genres, `drama`, `terror`, `isekai`];
console.log(newGenresArray);

const newGenresArray2 = [`drama`, `terror`, `isekai`, ...genres];
console.log(newGenresArray2);

//using Spread operator to edit/ add properties in a object

const updB = {
  ...myBook, //receiveing properties from oldBook
  moviePublishingDate: "2001-12-19", // adding new property
  pages: 2185, // overwriting existing property
};
console.log(updB);

//Template Literals
const summary = `${title} is a book with ${pages} pages long, that was writter by ${author}, and published in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
summary;

//Ternarie Operator
const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";
pagesRange;
console.log(`The book `);

//ArrowFunctions

//regular function declaration
// function getYear(str) {
//   return str.split("-")[0];
// }

const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

const summary2 = `${title} is a book with ${pages} pages long, that was writter by ${author}, and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
summary;

//Shortcircuiting and logical operators

//and operator
console.log(true && "some string");
console.log(false && "some string");
console.log(hasMovieAdaptation && `The book ${title} has a movie adaptation`);

//truthy and falsy values. falsy: 0, '', null, undefined
console.log("joe" && "somestring");
console.log(0 && "somestring");

//or operator
console.log(true || "somestring");
console.log(false || "somestring");

const russianTranslation = myBook.translations.russian;
russianTranslation;

console.log(russianTranslation || "No translation available");

// //nullish coalescing operator
// const librarythingReviews = myBook.reviews.librarything.reviewsCount;
// librarythingReviews;

// const wrongCount = librarythingReviews || "no data";
// wrongCount;

// const count = librarythingReviews ?? "no data";
// count;

//Optional Chaining
function getTotalReviewCount(book) {
  const goodreadsReviews = book.reviews?.goodreads?.reviewsCount;
  const librarythingReviews = book.reviews?.librarything?.reviewsCount ?? 0;

  return goodreadsReviews + librarythingReviews;
}

console.log(getTotalReviewCount(myBook));
*/

//The Array Map Method

// function getTotalReviewCount(book) {
//   const goodreadsReviews = book.reviews?.goodreads?.reviewsCount;
//   const librarythingReviews = book.reviews?.librarything?.reviewsCount ?? 0;

//   return goodreadsReviews + librarythingReviews;
// }

// const books = getBooks();

// const x = [1, 2, 3, 4, 5].map((el) => el * 2);
// console.log(x);

// const titles = books.map((book) => book.title);
// titles;

// // const essentialData = books.map((book) => {
// //   return {
// //     title: book.title,
// //     author: book.author,
// //   };
// // });

// const essentialData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
//   reviewCount: getTotalReviewCount(book),
// }));

// essentialData;

// //Array Filter
// const longBooks = books.filter((b) => b.pages >= 500);
// longBooks;

// const longBooksWithMovie = books
//   .filter((b) => b.pages >= 500)
//   .filter((b) => b.hasMovieAdaptation);
// longBooksWithMovie;

// const adventureBooks = books.filter((b) => b.genres.includes("adventure"));
// adventureBooks;

// const adventureBooks2 = books
//   .filter((b) => b.genres.includes("adventure"))
//   .map((b) => b.title);
// adventureBooks2;

// //Array Reduce Method
// const pagesAllBooks = books.reduce((acc, b) => acc + b.pages, 0);
// pagesAllBooks;

// //Array Sort Method
// const unsorted = [3, 7, 1, 9, 6];
// const sorted = unsorted.sort((a, b) => a - b);
// sorted;
// unsorted;

// const unsorted2 = [3, 7, 1, 9, 6];
// const sorted2 = unsorted2.slice().sort((a, b) => a - b);
// sorted2;
// unsorted2;

// const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
// sortedByPages;

// const sortedByPages2 = books
//   .slice()
//   .sort((a, b) => b.pages - a.pages)
//   .map((r) => ({ title: r.title, pages: r.pages }));
// sortedByPages2;

// //Working with immutable Arrays
// // 1) Add book objetct to Array
// const newBook = {
//   id: 6,
//   title: "The Hobbit",
//   author: "J. R. R. Tolkien",
// };

// const afterAddBook = [...books, newBook];
// afterAddBook;

// //2) Delete a book object from Array
// const booksAfterDelete = afterAddBook.filter((b) => b.id !== 3);
// booksAfterDelete;

// //3 Update book object in the array
// const booksAfterUpdate = booksAfterDelete.map((b) =>
//   b.id === 1 ? { ...b, pages: 1210 } : b
// );
// booksAfterUpdate;

//Asynchronous JavaScript: Promises
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//Asynchronous JavaScript: Async/Await
const getTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
};

const todos = getTodos();
