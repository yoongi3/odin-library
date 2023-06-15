// Data Structure

let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

// DOM Elements

const cardGrid = document.getElementById("cardGrid");
const modal = document.getElementById("modal");
const addBookForm = document.getElementById("addBookForm");

const newBookBtn = document.getElementById("newBookBtn");

const closeBtn = document.getElementById("closeBtn");

// main functions

const getBookFromInput = () => {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').checked
    return new Book(title, author, pages, read)
}

const addBook = (e) =>{
    e.preventDefault()

    const newBook = getBookFromInput();
    AddBookToLibrary(newBook);

    addBookForm.reset();
    modal.style.transform = "translate(-50%,-50%) scale(0)";
}

function AddBookToLibrary(book){
    myLibrary.push(book);
    CreateBookCard(book);
}

function CreateBookCard(book){
    // Card shell
    const newDiv = document.createElement("div");
    cardGrid.appendChild(newDiv)
    newDiv.setAttribute("class", "book");

    // Remove Button
    const removeBtn = document.createElement("button");
    removeBtn.setAttribute("class", "remove-Btn")
    newDiv.appendChild(removeBtn);
    removeBtn.appendChild(document.createTextNode("remove"))
    
    // title
    const title = document.createElement("p");
    newDiv.appendChild(title);
    title.appendChild(document.createTextNode("title: " + book.title))

    // author
    const author = document.createElement("p");
    newDiv.appendChild(author);
    author.appendChild(document.createTextNode("author: " + book.author))

    // pages
    const pages = document.createElement("p");
    newDiv.appendChild(pages);
    pages.appendChild(document.createTextNode("pages: " + book.pages))

    // Read Button
    const readBtn = document.createElement("button");
    readBtn.setAttribute("class", "card-btn");
    newDiv.appendChild(readBtn);
    let readText = "";
    if (book.read){
        readText = "read";
    }
    else if (!book.read){
        readText = "not read";
    }
    readBtn.appendChild(document.createTextNode(readText))

    removeBtn.onclick = removeBook;
    readBtn.onclick = readStatus;
}

// Buttons

const removeBook = (e) => {
    e.target.parentNode.remove();
}

const readStatus = (e) => {
    let status = e.target.textContent
    if (status == "read")
        e.target.textContent = "not read";
    if (status == "not read")
        e.target.textContent = "read";
}

addBookForm.onsubmit = addBook

newBookBtn.onclick = () => {
    modal.style.transform = "translate(-50%,-50%) scale(1)";
}

closeBtn.onclick = () => {
    addBookForm.reset();
    modal.style.transform = "translate(-50%,-50%) scale(0)";
}

// testing creates x amount of books

function FillLibrary(x){
    for(let i = 0; i <= x; i++){
        const a = generateBook()
        AddBookToLibrary(a)
    }
}
const generateBook = () => {
    const randTitle = "book " + Math.floor(Math.random() * 100);
    const randAuthor = "author " + Math.floor(Math.random() * 100);
    const randPages = Math.floor(Math.random() * 100);
    return new Book(randTitle, randAuthor, randPages, false)
}

FillLibrary(10);
