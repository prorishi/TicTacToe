const firebase = require("firebase-admin");

const firestore = firebase.firestore

firebase.initializeApp({
    credential: firebase.credential.cert(
        require("../firebase-auth.json")
    ),
});

const db = firestore()

// const aTuringRef = db.collection('users').doc('aturing');

// aTuringRef.set({
//   'first': 'Alan',
//   'middle': 'Mathison',
//   'last': 'Turing',
//   'born': 1912
// }).then(r=> {
//     console.log(r);
// })

module.exports = db;