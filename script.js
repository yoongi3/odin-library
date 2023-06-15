// Data Structure

let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

// DOM Elements

const booksGrid = document.getElementById("booksGrid");
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
    myLibrary.push(book)
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "book");
    newDiv.setAttribute("id", "no." + myLibrary.indexOf(book));
        
    Object.keys(book).forEach(key => {
        const p = document.createElement("p");
        newDiv.appendChild(p);
        p.appendChild(document.createTextNode(book[key]))
    });

    booksGrid.appendChild(newDiv)
}

// Buttons

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
