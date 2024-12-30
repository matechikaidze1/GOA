function Library(books) {
    this.books = books;

    this.listBooks = function() {
        this.books.forEach(function(book) {
            console.log("Title: " + book.title + ", Author: " + book.author);
        });
    };
}

const myLibrary = new Library([
    { title: 'tom sawyer', author: 'mark twain' },
    { title: 'cool book', author: 'this guy' },
]);

myLibrary.listBooks();
