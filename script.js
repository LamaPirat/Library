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

Book.prototype.inLibrary = false;

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

const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const pagesInput = document.querySelector("#pagesInput");
const readInput = document.querySelector("#readInput");

const displayBooks = function () {
  myLibrary.forEach(function (book) {
    if (book.inLibrary == true) {
      return;
    }
    const title = document.createElement("h3");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");
    const bookCard = document.createElement("div");
    const deleteButton = document.createElement("button");
    const readButton = document.createElement("button");

    title.classList.add("title");
    title.textContent = `${book.title}`;

    author.classList.add("author");
    author.textContent = `${book.author}`;

    pages.classList.add("pages");
    pages.textContent = `${book.pages}`;

    read.classList.add("read");
    //read.textContent = `${book.author}`

    bookCard.classList.add("bookCard");

    deleteButton.classList.add("deleteButton");
    deleteButton.textContent = "X";
    deleteButton.onclick = removeBook;

    readButton.classList.add("readButton");
    readButton.textContent = "Read";
    readButton.onclick = bookStatus;

    readButton.read = false;
    if (book.read == true) {
      bookCard.style.backgroundColor = "#62BD69";
      readButton.read = true;
    }

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(deleteButton);
    bookCard.appendChild(readButton);
    //bookCard.appendChild(read);

    bookContainer.appendChild(bookCard);
    book.inLibrary = true;
  });
};

const hideForm = function () {
  if (formContainer.classList.contains("hidden")) {
    formContainer.classList.remove("hidden");
  } else {
    formContainer.classList.add("hidden");
  }
};

const getInput = function () {
  let x = myLibrary.length;
  let book = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readInput.checked
  );
  hideForm();
  book.addToLibrary();
  displayBooks();
};

const removeBook = function () {
  console.log(this.parentNode);
  console.log(this.parentNode.firstChild.textContent);
  let bookTitle = this.parentNode.firstChild.textContent;
  myLibrary = myLibrary.filter(function (book) {
    return book.title != bookTitle;
  });
  this.parentNode.remove();
  console.log(myLibrary);
};

const bookStatus = function () {
  if (this.read == true) {
    this.parentNode.style.backgroundColor = "#f5be8d";
    this.read = false;
  } else {
    this.parentNode.style.backgroundColor = "#62BD69";
    this.read = true;
  }
};

displayBooks();
