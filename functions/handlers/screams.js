const { db } = require('../util/admin');

exports.getAllScreams = (req, res) => {
    db.collection('screams')
      .orderBy('createdAt', 'desc')
      .get()
      .then((data) => {
        let screams = [];
        data.forEach((doc) => {
          screams.push({
            screamId: doc.id,
            body: doc.data().body,
            userHandle: doc.data().userHandle,
            createdAt: doc.data().createdAt,
            commentCount: doc.data().commentCount,
            likeCount: doc.data().likeCount,
            userImage: doc.data().userImage
          });
        });
        return res.json(screams);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: err.code });
      });
  };

  exports.postOneScream = (req, res) => {
    if (req.body.body.trim() === '') {
      return res.status(400).json({ body: 'Campo vacío' });
    }
  
    const newScream = {
      body: req.body.body,
      userHandle: req.user.handle,
      createdAt: new Date().toISOString(),
     };
  
    db.collection('screams')
      .add(newScream)
      .then((doc) => {
        const resScream = newScream;
        resScream.screamId = doc.id;
        res.json(resScream);
      })
      .catch((err) => {
        res.status(500).json({ error: 'Algo salió mal' });
        console.error(err);
      });
  };