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

//# Chapter 02 - JS Review
/* 
const book = getBook(3);

//## Desctructuring Objects
// const title = book.title;
// const author = book.author;

// The variable names are the same as the
//object's properties name.
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(title, author);

//## Destructuring Arrays
console.log(genres);

// const primaryGenre = genres[0];
// const secondGenre = genres[1];

// const [primaryGenre, secondaryGenre] = genres;
// console.log(primaryGenre, secondaryGenre);

///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//## Rest and Spread operators

// Rest
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

//Spread in Arrays
const newGenres = [...genres, "epic fantasy"];
console.log(newGenres);

//Spread in Objects
const updatedBook = {
  ...book,
  //adding a new property
  moviePublicationDate: "2001-12-19",
  //overwriting an existing property
  pages: 1210,
};
console.log(updatedBook);

///////////////////////////////////////////////////////////////////////
//## Template Literals
const summary = `${title}, is a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

///////////////////////////////////////////////////////////////////////
//Ternary Operator

const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;

//Arrow function
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

///////////////////////////////////////////////////////////////////////
//Short-Circuiting

//AND
console.log(true && "some string");
console.log(false && "some string");
console.log(hasMovieAdaptation && "This book has a movie");
//falsy: 0, '', null, undefined
console.log("joe" && 0);

//OR
console.log(true || "some string");
console.log(false || "some string");

console.log(book.translations.portuguese);

const spanishTranslation = book.translations.portugues || "NOT TRANSLATED";
spanishTranslation;

//problem of use || with falsy values
//The below count has data, and it is 0.
// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

//The solution to this is to use the nullish coalescing operator
// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;
//The second value will only be returned when the first one is null or
//undefined. It' accepts 0 or en empty string.

///////////////////////////////////////////////////////////////////////
//Optional Chaining
const getTotalReviewCount = (book) => {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;

  return goodreads + librarything;
};

console.log(getTotalReviewCount(book));
 */
///////////////////////////////////////////////////////////////////////
//Array Map Method
// Map loop over an array, and return a new array with the same length, with some
// operation applied to each element of the original array
/* 
const books = getBooks();

const getTotalReviewCount = (book) => {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;

  return goodreads + librarything;
};

//Example of map
[1, 2, 3, 4, 5];
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewCount: getTotalReviewCount(book),
}));
//os parênteses são para garantir que o objeto seja retornado corretamente.

essentialData;

///////////////////////////////////////////////////////////////////////
//Array Filter Method
const longBooks = books.filter((book) => book.pages > 500);
longBooks;

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

adventureBooks;

///////////////////////////////////////////////////////////////////////
//Array Reduce Method
//Good for performing arithimetic operations on arrays
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

///////////////////////////////////////////////////////////////////////
//Array Sort Method
//This method changes de original array
const y = [3, 7, 1, 9, 6];
const sorted = y.sort((a, b) => a - b); //sorting in a ascending way
sorted;
y;
// a and b are always the current value and the next value, respectively

const sorted2 = y.sort((a, b) => b - a);
sorted2;
y;

//To avoid messing with the original array, we can make a copy of it, using
//slice
const sorted3 = y.slice().sort((a, b) => a - b);
sorted3;
y;

const sortedBooks = books.slice().sort((a, b) => b.pages - a.pages);
sortedBooks;

///////////////////////////////////////////////////////////////////////
//Working with immutable Arrays
//1)Add a book
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K.Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

//2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

//3) Update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;
 */

/////////////////////////////////////////////////////////////////////
//Asynchronous JavaScript: Promises
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((resp) => resp.json())
//   .then((data) => console.log(data));

// console.log(`Print after request`);

/////////////////////////////////////////////////////////////////////
//Asynchronous JavaScript: Async/ Await
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getTodos();
