import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyDbT2RUZ8r2oVhFSJYCUONldBKQSiRbDCo",
      authDomain: "reacttodo-4b44f.firebaseapp.com",
      databaseURL: "https://reacttodo-4b44f.firebaseio.com",
      storageBucket: "reacttodo-4b44f.appspot.com",
      messagingSenderId: "441733320236"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
