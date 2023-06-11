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

const addBookForm = document.getElementById("addBookForm")

// 

const getBookFromInput = () => {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').value
    return new Book(title, author, pages, read)

}

const addBook = (e) =>{
    e.preventDefault()
    const newBook = getBookFromInput();
    AddBookToLibrary(newBook);
    addBookForm.reset();
}

function AddBookToLibrary(book){
    myLibrary.push(book)

    const newDiv = document.createElement("div");
    newDiv.setAttribute("class","book");
        
    Object.keys(book).forEach(key => {
        const p = document.createElement("p");
        newDiv.appendChild(p);
        p.appendChild(document.createTextNode(book[key]))
    });

    booksGrid.appendChild(newDiv)
}

// Buttons

addBookForm.onsubmit = addBook


