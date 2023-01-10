let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.addToLibrary = function () {
  myLibrary.push(this);
};

let book1 = new Book("got", "rrm", 1000, false);
let book2 = new Book("Life of stoic", "zeno", 500, false);
let book3 = new Book("Life of brian", "monthy Python", 750, true);
let book4 = new Book("Harry potter", "jk rowling", 2000, false);

book1.addToLibrary();
book2.addToLibrary();
book3.addToLibrary();
book4.addToLibrary();

const bookContainer = document.querySelector(".bookContainer");
const formContainer = document.querySelector(".formContainer");

const displayBooks = function () {
  myLibrary.forEach(function (book) {
    const title = document.createElement("h3");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");
    const bookCard = document.createElement("div");

    title.classList.add("title");
    title.textContent = `${book.title}`;

    author.classList.add("author");
    author.textContent = `${book.author}`;

    pages.classList.add("pages");
    pages.textContent = `${book.pages}`;

    read.classList.add("read");
    //read.textContent = `${book.author}`

    bookCard.classList.add("bookCard");

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    //bookCard.appendChild(read);

    bookContainer.appendChild(bookCard);
  });
};

const hideForm = function () {
  if (formContainer.classList.contains("hidden")) {
    formContainer.classList.remove("hidden");
  } else {
    formContainer.classList.add("hidden");
  }
};

displayBooks();
