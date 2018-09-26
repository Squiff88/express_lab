const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');
const router = require('./routes.js');
// const bodyParser = require('body-parser')

app.use(cors())
app.use(router)
// app.use(bodyParser.urlencoded({ extended: false }))

app.get('/' , (req ,res) => {
	res.send('<h2>Live on port 8000</h2>')
	res.end()	
});

app.get('/map' , (req ,res) => {
	fetch("https://randomuser.me/api/")
	.then(res => res.json())
	.then(data => res.send(data.results[0].location.coordinates))
	})


app.listen(8000)

