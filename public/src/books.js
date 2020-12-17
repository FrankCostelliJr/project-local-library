/* eslint-disable strict */
function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}//use find to return the specific author object from a given id

function findBookById(books, id) {
  return books.find(book => book.id === id);
}//use find to return the specific book object from a given id

function partitionBooksByBorrowedStatus(books) {
  //create a function that sorts books into two arrays, depending on the status of the book
  //create 3 arrays 
  const partitionedArray = []; //final array
  const booksBorrowed = []; //array of books where returned === false
  const booksReturned = [];//array of books where returned 
  books.filter(book => (book.borrows[0].returned === true) ? booksReturned.push(book) : booksBorrowed.push(book));
  partitionedArray.push(booksBorrowed, booksReturned);
  return partitionedArray;
}

function getBorrowersForBook(book, accounts) {
  //return an array of all the transactions from the books borrows key
  let borrowers = [];
  accounts.forEach(account => {
    book.borrows.forEach(transaction =>{ //check transactions in borrows array
      if(transaction.id === account.id) {//if transaction id equals account id
        let accountObj = {...account};//create new object, spread in account
        accountObj.returned = transaction.returned; //set the transaction status on the account Obj
        borrowers.push(accountObj); //push the Obj into array
      }
    });
  });
  return borrowers.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
