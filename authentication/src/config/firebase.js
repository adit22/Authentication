import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDTbi-1ylIFwUearsSZdBYJhFPp62Gjshg",
    authDomain: "authenti-c28ea.firebaseapp.com",
    databaseURL: "https://authenti-c28ea.firebaseio.com",
    projectId: "authenti-c28ea",
    storageBucket: "authenti-c28ea.appspot.com",
    messagingSenderId: "676729533666",
    appId: "1:676729533666:web:327cba614a61cd73635abb",
    measurementId: "G-9T7TLVQ21Q"
  };

const fire =firebase.initializeApp(firebaseConfig);
export default fire;

