/* eslint-disable strict */

function totalBooksCount(books) {
  return books.length; //each book is an index in an array, therefore number of indexes = number of books
}

function totalAccountsCount(accounts) {
  return accounts.length; //each account is an index in an array, therefore number of indeses = number of accounts
}

function booksBorrowedCount(books) {
  let borrowedBooks = 0; //initialize a variable for the total
  books.filter(book => (book.borrows[0].returned === false) ? borrowedBooks += 1 : borrowedBooks += 0);
  return borrowedBooks; //filter and return books by the most recent transaction: book.borrows at index 0
}

function getMostCommonGenres(books) {//find the most common genres
  let commonGenres = books.reduce((acc, book) => {
    (acc[book.genre]) ? acc[book.genre]++ : acc[book.genre] = 1; //create an object with genre names and number of books for each genre
    return acc;
  },{});
  let keys = Object.keys(commonGenres); //break down objects for sorting and reformating
  let sortedKeys = keys.sort((key1, key2) => commonGenres[key2] - commonGenres[key1]); //sort keys
  let finalArray = sortedKeys.map((key) => { //map sorted keys to new array
    return {name:key, count:commonGenres[key]}; 
  });
  return finalArray.slice(0,5); //slice array to return top 5
}


function getMostPopularBooks(books) {
  let mostPopular = []; //sort all books first
  let sortedBooks = books.sort((bookA, bookB) => bookB.borrows.length - bookA.borrows.length); 
  sortedBooks.forEach((book) => {
    let newObj = {}; //loop through each book and create an object 
    newObj['name'] = book.title; //objects name key has a value of book.title
    newObj['count'] = book.borrows.length; //objects count key is the length of that books borrows array
    mostPopular.push(newObj);//push to array
  });
  
  return mostPopular.slice(0,5);//return top 5
}


//Created a helper function to find an authors name using their id
//Use this function below to generate an authors name from an id number
function findAuthorNameById(authors, id) {
  let authorName = ''; //initialize an empty string
  authors.forEach((author) => { //loop through authors
    if (author.id === id) { 
      authorName = `${author.name.first} ${author.name.last}`;
    } //if id matches input id, return first and last name with a space between
  });
  return authorName;
}

function getMostPopularAuthors(books, authors) {
  let popularAuthors = []; 
  let authorObj = books.reduce((acc, book) => {//reduce down the content of books to an author id and number of borrows
    acc[book.authorId] ? (acc[book.authorId] += book.borrows.length) : (acc[book.authorId] = book.borrows.length); 
    return acc;// If an author id exists - increment its value by 1 : If it doesn't exist - create a key with value of book.borrows.length
  },{});
  //the above returns an object with author id# set to a value. we need the object to be structured - name: authors name, count: number of borrows
  for (const key in authorObj) {//loop through the keys created above - for each loop:
    const value = authorObj[key];//set value to the authorObj key's value (this value is the number of borrows from above)
    let newObj = {};//create a new object
    newObj['name'] = findAuthorNameById(authors, parseInt(key)); //set newObj name: to author's name - (the helper function above gets the full name)
    newObj['count'] = value; //sets count: to value (the number of barrows)
    popularAuthors.push(newObj); //push the object into the array
  }
  let sortedPopularAuthors = popularAuthors.sort((authorA, authorB) => authorB.count - authorA.count);//sort the array
  return sortedPopularAuthors.slice(0,5);//and return the top 5
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
