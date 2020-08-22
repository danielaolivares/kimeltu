const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("hola");
});
exports.getScreams = functions.https.onRequest((req,res) => {
    admin.firestore().collection('screams').get()
    .then(data => {
        let screams = [];
        data.forEach(doc => {
            this.getScreams.push(doc.data());
            return res.jason(screams)
        })
        .catch(err => console.error(err))
    })
})