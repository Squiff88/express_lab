const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');

app.use(cors());

app.get('/new' , (req ,res ,next) => {
	fetch('https://randomuser.me/api/')
	    .then(res => {
	   		return res.json()
	    }).then(data => {
	    	res.send(data.results[0].location.coordinates)
	    });

})


 

app.get('/' , (req , res ,next) => {
	console.log('ón port 8000');
	res.send('Live on port 8000');
	res.end()
})

app.get('/api/info' , (req , res ,next) => {
	console.log('ón port 8000');
	res.send('Live on port 8000 api info');
	res.end()
})



app.listen(8000);