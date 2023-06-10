let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function AddBookToLibrary(book){
    myLibrary.push(book)
}

const book1 = new Book('book1','author1','1page','not read')
const book2 = new Book('book2','author2','2pages','read')

AddBookToLibrary(book1);
AddBookToLibrary(book2)

function displayLibrary(){
    myLibrary.forEach(element => {
        console.log(element)
    });
}

displayLibrary();