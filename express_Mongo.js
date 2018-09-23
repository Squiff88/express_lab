// npm init
// npm install --save express mongodb@2.2.16 body-parser
// npm install --save-dev nodemon

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();


app.listen(3000 , () => console.log('live on 3000'));