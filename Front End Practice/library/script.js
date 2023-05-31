//book data
const myLibrary = [
    new Book('The Great Gatsby', 'F. Scott Fitzgerald', 218, true),
    new Book('To Kill a Mockingbird', 'Harper Lee', 281, false),
    new Book('Pride and Prejudice', 'Jane Austen', 432, true),
    new Book('1984', 'George Orwell', 328, true),
    new Book('The Catcher in the Rye', 'J.D. Salinger', 277, false),
    new Book('The Great Gatsby', 'F. Scott Fitzgerald', 218, true),
    new Book('To Kill a Mockingbird', 'Harper Lee', 281, false),
    new Book('Pride and Prejudice', 'Jane Austen', 432, true),
    new Book('1984', 'George Orwell', 328, true),
    new Book('The Catcher in the Rye', 'J.D. Salinger', 277, false)
];
//book constructor
function Book(title, author, pageNum, readStatus) {
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.readStatus = readStatus;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    showAll(myLibrary);
}

function showAll(myLibrary) {
    let bookContainer = document.querySelector('.book-collection');
    bookContainer.textContent = "";
    for (let book of myLibrary) {
        createBookHtml(book);
    }
}

function createBookHtml(book) {
    let bookContainer = document.querySelector('.book-collection');
    let bookDiv = document.createElement('div');
    let bookTitle = document.createElement('h1');
    let bookAuthor = document.createElement('h2');
    let bookPageNum = document.createElement('div');
    let bookReadStatusBtn = document.createElement('button');
    let bookAddRemoveBtn = document.createElement('button');

    bookDiv.classList.add("book");
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPageNum.textContent = book.pageNum + " pages";
    bookReadStatusBtn.textContent = book.readStatus ? "Read" : "Not Read";
    bookAddRemoveBtn.innerText = "Remove";
    bookAddRemoveBtn.classList.add('remove-btn');

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPageNum);
    bookDiv.appendChild(bookReadStatusBtn);
    bookDiv.appendChild(bookAddRemoveBtn);

    bookContainer.appendChild(bookDiv);

    bookAddRemoveBtn.addEventListener("click", () => {
        bookDiv.remove();
    })

    bookReadStatusBtn.addEventListener("click", () => {
        if (book.readStatus) {
            bookReadStatusBtn.textContent = "Not Read";
        } else {
            bookReadStatusBtn.textContent = "Read";
        }
        book.readStatus = !book.readStatus;
    })

}

showAll(myLibrary);

//form inputs


function closeForm() {
    let form = document.querySelector("form");
    form.style.display = "none";

    let bgDarkLayer = document.querySelector('.dim-background-layer');
    bgDarkLayer.style.display = "none";

    document.getElementById('book-title').value = '';
    document.getElementById('book-author').value = '';
    document.getElementById('book-pages').value = '';
    document.getElementById('toggle-switch').textContent = 'Not Read';
}
function openForm() {
    let form = document.querySelector("form");
    form.style.display = "flex";

    let bgDarkLayer = document.querySelector('.dim-background-layer');
    bgDarkLayer.style.display = "block";
}

function addBook() {
    let title = document.getElementById('book-title').value;
    let author = document.getElementById('book-author').value;
    let pages = document.getElementById('book-pages').value;
    let readStatus = document.getElementById('toggle-switch').textContent;
    addBookToLibrary(new Book(title, author, pages, true));
    closeForm();
}

//open form
let openFormBtn = document.querySelector('.open-form');
openFormBtn.addEventListener('click', openForm);

//close form
let formCloseButton = document.querySelector(".form-close");
formCloseButton.addEventListener('click', closeForm);

// add book
let addBookBtn = document.querySelector('.add-book');
addBookBtn.addEventListener('click', addBook);



