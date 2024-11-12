export class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
export class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    if (book instanceof Book) {
      this.books.push(book);
    }
  }

  removeBook(title) {
    const index = this.books.findIndex((book) => book.title === title);

    if (index !== -1) {
      const removedBook = this.books.splice(index, 1);
    }
  }

  searchBook(title) {
    const foundBooks = this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    
    if (foundBooks.length > 0) {
      return foundBooks.map(book => `${book.title} by ${book.author}`);
    } else {
      return `No books found with title containing "${title}"`;
    }
  }

  listBooks() {
    if (this.books.length === 0) {
      return "No books in the library.";
    } else {
      return this.books
        .map((book) => `${book.title} by ${book.author}`)
        .join("\n");
    }
  }
}
