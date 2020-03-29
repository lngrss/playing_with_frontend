let library = [];

function Book(title, pages, author, read) {
  this.title = title
  this.pages = pages
  this.author = author
  this.read = read
  this.info = function() {
    return this.title + ", by " + this.author + ", " + this.pages + " pages, " + (this.read ? "read." : "not read yet.")
  }
}

function addBookToLibrary() {
  const title = prompt('Give me the title of the new book:');
  const pages = prompt('How many pages does it have?');
  const author = prompt('Who wrote it?');
  const read = prompt('Have you read it already?');
  const book = new Book(title, pages, author, read.toUpperCase() == 'YES');
  library.push(book);
  render();
}

function changeReadStatus(i) {
  library[i].read = !library[i].read;
  render();
}

function deleteBook(i) {
  library = library.slice(0, i).concat(library.slice(parseInt(i) + 1));
  render();
}

function addData(text) {
  var td = document.createElement("td");
  td.append(document.createTextNode(text));
  return td;
}

function addButton(i, text, functionCall) {
  var td = document.createElement("td");
  var button = document.createElement("button");
  button.append(document.createTextNode(text));
  button.id = i;
  button.addEventListener('click', function() {
    functionCall(button.id);
  });
  td.appendChild(button);
  return td
}

function displayBook(table, book, i) {
  var tr = document.createElement("tr");

  tr.appendChild(addData(book.title));
  tr.appendChild(addData(book.pages));
  tr.appendChild(addData(book.author));
  tr.appendChild(addData(book.read));

  tr.append(addButton(i, 'read', changeReadStatus));

  tr.append(addButton(i, 'delete', deleteBook));

  table.appendChild(tr);
}

function render() {
  const table = document.getElementById('library');
  table.textContent = '';
  for (var i = 0; i < library.length; i++) {
    displayBook(table, library[i], i);
  }
}

document.getElementById('newBook').addEventListener('click', addBookToLibrary)
render();
