const myLibrary = [];
const table = document.querySelector('#table-body');

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
let theHobbit2 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
let theHobbit3 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');


myLibrary.push(theHobbit, theHobbit2, theHobbit3);

myLibrary.forEach(element => {
    let newRow = table.insertRow();
    newRow.innerHTML = `<th scope="row">${myLibrary.indexOf(element) + 1}</th><td>${element.title}</td><td>${element.author}</td><td>${element.pages}</td><td>${element.status}</td>`;
});