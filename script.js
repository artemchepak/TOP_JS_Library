const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function() {
        return `${this.title} by ${this.title}, ${this.pages} pages, ${this.status}`;
    }
}

function addBookToLibrary() {
  // do stuff here
}

let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
