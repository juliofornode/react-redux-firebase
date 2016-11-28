//ReactFire is incompatible with Redux.

//Using redux-thunk, we create a new action everytime a value changes in the Firebase database.

//How to create a database from the Firebase dashboard
//https://www.youtube.com/watch?v=mJv4rtHoFQ4
import firebase from 'firebase';

var config = {
    apiKey: "XXX",
    authDomain: "oneproject-a3d47.firebaseapp.com",
    databaseURL: "https://oneproject-a3d47.firebaseio.com",
    storageBucket: "oneproject-a3d47.appspot.com",
    messagingSenderId: "767198825039"
  };

firebase.initializeApp(config);

var Books = firebase.database().ref().child('books');

export function getBooks() {
  return (dispatch) => {
    Books.on('value', snapshot => {
      dispatch({
        type: 'FETCH_DATA',
        payload: snapshot.val()
      })
    })
  }
}

export function deleteBook(BookId) {
  return (dispacth) => {
    Books.child(BookId).remove();
  }
}

export function createBook(book) {
  return (dispatch) => {
    Books.push(book);
  }
}


export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
