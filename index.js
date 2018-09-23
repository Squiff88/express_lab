// NPM install express
// NPM install --save-dev nodemon


const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));


app.get('/',(req,res) => {
	res.send("Xpress is ready 2 go");
});

app.get('/users/',(req,res) => {
	res.send("Xpress is ready 2 go");
});

app.listen(3000)