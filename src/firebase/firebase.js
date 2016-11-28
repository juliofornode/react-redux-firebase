import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCZLCtRTQtRRHirde1P_xZNgfHam_aBMeA",
    authDomain: "oneproject-a3d47.firebaseapp.com",
    databaseURL: "https://oneproject-a3d47.firebaseio.com",
    storageBucket: "oneproject-a3d47.appspot.com",
    messagingSenderId: "767198825039"
  };

firebase.initializeApp(config);

firebase.database().ref().set({
  appName: 'Book App'
});

/*
componentWillMount: function() {
  this.firebaseRef = new Firebase("https://ReactFireTodoApp.firebaseio.com/items/");
  this.firebaseRef.on("child_added", function(dataSnapshot) {
    this.items.push(dataSnapshot.val());
    this.setState({
      items: this.items
    });
  }.bind(this));
}
*/
