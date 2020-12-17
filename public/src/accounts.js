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
  //return an array of books and authors of all the currently checked out books.
  let possessedBooks = []; //create an empty result array

  for(let i = 0; i < books.length; i++) {
    let book = books[i]; 
    const {id, title, genre, borrows} = book; //deconstruct each book as you loop through
    for(let j = 0; j < borrows.length; j++) {
      if(borrows[j].id === account.id && borrows[j].returned === false) {//checking for the borrow id matches account id, and whether the book is returned
        for(let k = 0; k < authors.length; k++) {
          let author = authors[k];
          if(author.id === book.authorId) { //checking final condition
            let tempBook = { id, title, genre, author, borrows };//construct new object and push to array
            possessedBooks.push(tempBook);
          }
        }
      }
    }
  }
  return possessedBooks;
    
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
