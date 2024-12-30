function Book(title, author) {
    this.title = title;
    this.author = author || "unknown";

    this.getDetails = function() {
        console.log("Title: " + this.title + ", Author: " + this.author);
    };
}

const book1 = new Book('1976', 'mark twain');
book1.getDetails();

const book2 = new Book('tom sawyer');
book2.getDetails();
