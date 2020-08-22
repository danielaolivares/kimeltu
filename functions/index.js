const functions = require('firebase-functions');

const app = require('express')();

const { getAllScreams }  = require('./handlers/screams');
const { signup,
    login }  = require('./handlers/user');

const firebase = require('firebase');
const { json } = require('express');
firebase.initializeApp(firebaseConfig);




app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);

// registrarse
app.post('/singup',singup);
app.post('login',login);


  let errors = {};
  
  if (isEmpty(data.email)) {
    errors.email = 'Must not be empty';
  } else if (!isEmail(data.email)) {
    errors.email = 'Must be a valid email address';
  }

  if (isEmpty(data.password)) errors.password = 'Must not be empty';
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = 'Passwords must match';
  if (isEmpty(data.handle)) errors.handle = 'Must not be empty';



exports.createScream = functions.https.onRequest((req,res) => {
    const newScream = {
        body: req.body.body,
        userHandle: req.body.userHandle,
        createdAt: admin.firestore.Timestamp.fromDate(new Date())
    };

    db
    .collection('screams')
    .add(newScream)
    .then(doc => {
        res.json({ message: `document ${doc.id} created successfully`});
    })
    .catch(err => {
        res.status(500).jason({error: 'something went wrong'});
        console.error(err);
    })
});

exports.validateLoginData = (data) => {
    let errors = {};
  
    if (isEmpty(data.email)) errors.email = 'Must not be empty';
    if (isEmpty(data.password)) errors.password = 'Must not be empty';
  
    return {
      errors,
      valid: Object.keys(errors).length === 0 ? true : false
    };
  };



exports.api = functions.region('southamerica-east1').https.onRequest(app);