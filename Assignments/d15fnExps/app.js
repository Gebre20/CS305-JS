"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { addBook, findTitles, findAuthors, findIDs }; //add all of your function names here that you need for the node mocha tests
let libraryBooks = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];
function addBook(title, author, libraryID) {
  let book = {};
  //let book = new newBook(title, author, libraryID);
  book.title = title;
  book.author = author;
  book.libraryID = libraryID;
  libraryBooks.push(book);

  return book;
}
function findTitles() {
  let titles = [];
  for (let i = 0; i < libraryBooks.length; i++) {
    titles[i] = libraryBooks[i].title;
  }
  return titles.sort();
}

function findAuthors() {
  let authores = [];
  for (let i = 0; i < libraryBooks.length; i++) {
    authores[i] = libraryBooks[i].author;
  }
  return authores.sort();
}

function findIDs() {
  let ids = [];
  for (let i = 0; i < libraryBooks.length; i++) {
    ids[i] = libraryBooks[i].libraryID;
  }
  return ids.sort();
}

module.exports = { addBook, findTitles, findAuthors, findIDs };
