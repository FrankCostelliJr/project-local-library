/* eslint-disable strict */
function findAccountById(accounts, id) {
  const foundAccount = accounts.find(account => account.id === id);
  return foundAccount;//find account using account id
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => 
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
}//change names to lower case and sort alphabetically

function numberOfBorrows(account, books) {
  //return the number of times an account's id has appeared in a book's borrow array
  const accountId = account.id;
  let numBorrows = 0; //create an incrementor
  books.forEach(book => {//loop through books and increment for each borrow
    book.borrows.forEach(borrow => {
      if(accountId === borrow.id) {
        numBorrows += 1;
      }
    });
  });
  return numBorrows; 


function getBooksPossessedByAccount(account, books, authors) {
  /**CODE HAS BEEN UPDATED PER GRADING TEAM REQUEST - ALL SINGLE LETTER VARIABLES REMOVED */
  //return an array of books and authors of all the currently checked out books.
  let possessedBooks = []; //create an empty result array
  books.forEach(book => {const {id, title, genre, borrows} = book;
    borrows.forEach(borrow => {
      if(borrow.id === account.id && borrow.returned === false) {
        authors.forEach(author => {
          if(author.id === book.authorId) {
            let tempBook = { id, title, genre, author, borrows };
            possessedBooks.push(tempBook);
          }
        });
      }
    });
  });
  return possessedBooks;
    
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
