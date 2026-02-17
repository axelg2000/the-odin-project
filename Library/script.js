const myLibrary = []


class Book {
    constructor(title, author) {
        this.id = crypto.randomUUID()
        this.title = title
        this.author = author
        this.read = false
    }
}

function createBook(title, author) {
    let newBook = new Book(title, author);
    myLibrary.push(newBook);
    return newBook;
}

function insertBook(book){
        const titleSpan = document.createElement('span')
        const newDiv = document.createElement('div');
        newDiv.classList.add("book");
        const deleteBtn = document.createElement('button')
        deleteBtn.setAttribute('buttonType', 'deleteButton')
        const readButton = document.createElement('button')
        readButton.setAttribute('buttonType', 'readButton')
        readButton.textContent = 'Not read'
        deleteBtn.textContent = 'X'
        titleSpan.textContent = book.title;
        newDiv.appendChild(titleSpan);
        newDiv.appendChild(deleteBtn);
        newDiv.appendChild(readButton)
        newDiv.setAttribute('data-id',book.id)
        library.appendChild(newDiv);
}

function displayBook(){
    myLibrary.forEach(function(book){
        insertBook(book)
    })
}

function updateLibrary(book){
    insertBook(book)
}

Book.prototype.changeReadStatus = function(){
    this.read = !this.read;
}



const harryPotter = createBook('Harry pooter','JK Rolling')
const lordOfTheRings = createBook('Lord of the rings','JR Tolkien')
const americanPsycho = createBook('American Psycho','Infamous Writer')
const nineteenEightyFour = createBook('1984', 'George Orwell')
const theGreatGatsby = createBook('The Great Gatsby', 'F. Scott Fitzgerald')
const prideAndPrejudice = createBook('Pride and Prejudice', 'Jane Austen')
const theHobbit = createBook('The Hobbit', 'JR Tolkien')


const library = document.querySelector('#library')
const newBook = document.querySelector("#newBook")
const myDialog = document.querySelector("#myDialog")
const closeDialog = document.querySelector('#closeDialog')
const form = document.querySelector('#form')



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector("#author").value;
    let newBook = createBook(title,author);
    updateLibrary(newBook);
    myDialog.close();
})


newBook.addEventListener('click',()=> {
     myDialog.showModal()
    })

closeDialog.addEventListener('click', () => {
    myDialog.close();
});



library.addEventListener('click',(e)=>{
    const deleteBtn = e.target.closest('[buttonType="deleteButton"]');
    if (!deleteBtn){return};
    const divElement = e.target.closest('div');
    if (divElement){
        divElement.remove()
    }
}
)

library.addEventListener('click', (e)=>{
    const readButton = e.target.closest('[buttonType="readButton"]');
    if (!readButton){return};
    const divBook = e.target.closest('.book')
    if(!divBook){return};
    const bookId = divBook.getAttribute('data-id')
    const bookToUpdate = myLibrary.find(item => item.id === bookId)
    bookToUpdate.changeReadStatus()
    readButton.textContent = (bookToUpdate.read ? 'Read' : 'Not Read');
})


displayBook()
