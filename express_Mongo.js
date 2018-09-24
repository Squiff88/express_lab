// npm init
// npm install --save express mongodb@2.2.16 body-parser
// npm install --save-dev nodemon

const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db 			 = require('./config/db.js');
const app            = express();


app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;

MongoClient.connect(db.url , (err, database) => {
  if (err) return console.log(err)
  require('./app/routes')(app, database);

  app.listen(port, () => {
    console.log('We are live on ' + port);
  });               
})


// IN ANOTHER FILE
// Create notes

module.exports = function(app, db) {

  const collection = app.post('/notes', (req, res) => {
  	console.log(req.body)
    const note = { text: req.body, title: req.title };
    db.collection('notes').insert(note, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};