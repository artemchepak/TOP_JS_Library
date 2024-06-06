const myLibrary = [];
const table = document.querySelector('#table-body');
const bookModal = document.querySelector('#bookModal');
const btn = document.querySelector('#btn');

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function () {
        return `${this.title} by ${this.title}, ${this.pages} pages, ${this.status}`;
    }
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let status = document.querySelector('#status').value;

    if (!title || !author || !pages || !status) {
        alert('Please fill out all fields.');
        return;
    }

    let newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    updateTable();
};

function updateTable() {
    let newRow = table.insertRow();
    let element = myLibrary.slice(-1)[0];
    newRow.innerHTML = `<th scope="row">${myLibrary.indexOf(element) + 1}</th><td>${element.title}</td><td>${element.author}</td><td>${element.pages}</td><td>${element.status}</td>`;
}

btn.addEventListener('click', function () {
    addBookToLibrary();
});