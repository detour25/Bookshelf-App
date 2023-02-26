
class Book {
  constructor(title, author, subject, language) {
    this.title = title;
    this.author = author;
    this.subject = subject;
    this.language = language;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  render() {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";
    const titleH2 = document.createElement("h2");
    titleH2.innerText = this.title;
    const authorP = document.createElement("p");
    authorP.innerText = "Author: " + this.author;
    const subjectP = document.createElement("p");
    subjectP.innerText = "Subject: " + this.subject;
    const languageP = document.createElement("p");
    languageP.innerText = "Language: " + this.language;
    const commentsDiv = document.createElement("div");
    commentsDiv.className = "comment-section";
    const commentForm = document.createElement("form");
    commentForm.className = "comment-form";
    const commentLabel = document.createElement("label");
    commentLabel.setAttribute("for", "comment-input");
    commentLabel.innerText = "Leave a Comment:";
    const commentInput = document.createElement("input");
    commentInput.setAttribute("type", "text");
    commentInput.setAttribute("id", "comment-input");
    commentInput.setAttribute("maxlength", "280");
    const commentButton = document.createElement("button");
    commentButton.setAttribute("type", "submit");
    commentButton.innerText = "Send";
    commentForm.appendChild(commentLabel);
    commentForm.appendChild(commentInput);
    commentForm.appendChild(commentButton);
    commentsDiv.appendChild(commentForm);
    for (const comment of this.comments) {
      const commentP = document.createElement("p");
      commentP.innerText = comment;
      commentsDiv.appendChild(commentP);
    }
    bookDiv.appendChild(titleH2);
    bookDiv.appendChild(authorP);
    bookDiv.appendChild(subjectP);
    bookDiv.appendChild(languageP);
    bookDiv.appendChild(commentsDiv);
    return bookDiv;
  }
}


class Bookshelf {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  render() {
    const bookshelfDiv = document.createElement("div");
    bookshelfDiv.className = "bookshelf";
    for (const book of this.books) {
      const bookDiv = book.render();
      bookshelfDiv.appendChild(bookDiv);
    }
    return bookshelfDiv;
  }
}


const myBookshelf = new Bookshelf();

 


document.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.target.className !== "comment-form") {
    return;
  }
  const commentInput = event.target.querySelector("input");
  const comment = commentInput.value;
  const bookDiv = event.target
})

const newBookForm = document.getElementById("new-book-form");

newBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
//values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const subject = document.getElementById("subject").value;
  const language = document.getElementById("language").value;
  const comment = document.getElementById("comment").value;
//creates book and add to bookshelf
  const book = new Book(title, author, subject, language);
  book.addComment(comment);
  myBookshelf.addBook(book);
//this updates localStorage and renders
  localStorage.setItem("bookshelf", JSON.stringify(myBookshelf.books));
  const bookshelfDiv = myBookshelf.render();
  const bookshelfContainer = document.getElementById("bookshelf");
  bookshelfContainer.innerHTML = "";
  bookshelfContainer.appendChild(bookshelfDiv);
  newBookForm.reset();
});

