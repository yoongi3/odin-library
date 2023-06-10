// Data Structure

let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

// adding books manually for testing *remove later

const book1 = new Book('book 1','author 1','1 page','not read')
const book2 = new Book('book 2','author 2','2 pages','read')
const book3 = new Book('hello','joshy','123 pages', 'read')

AddBookToLibrary(book1);
AddBookToLibrary(book2);
AddBookToLibrary(book3)

// DOM Elements

const library = document.getElementById("library");

// 

function AddBookToLibrary(book){
    myLibrary.push(book)
}

document.body.onload = displayLibrary;

function displayLibrary(){
    myLibrary.forEach(book => {

        const newDiv = document.createElement("div");
        newDiv.setAttribute("class","book");
        
        Object.keys(book).forEach(key => {
            const p = document.createElement("p");
            newDiv.appendChild(p);
            p.appendChild(document.createTextNode(book[key]))
        });

        library.appendChild(newDiv)
    });
}
