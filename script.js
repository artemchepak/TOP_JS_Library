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
    clearForm();
};

function updateTable() {
    table.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const newRow = table.insertRow();
        newRow.innerHTML = `
            <th scope="row">${index + 1}</th>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.status}</td>
        `;
    });
}

function clearForm() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#status').value = '';
}

btn.addEventListener('click', addBookToLibrary());