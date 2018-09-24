const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dataBase = require('mysql');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname));



// DUMMY DATA 
// const data = {
// 	"users": [{
// 			"user": "Pesho",
// 			"pass": "Picha",
// 			"id": 1
// 		},
// 		{
// 			"user": "Pesho",
// 			"pass": "Kopeleto",
// 			"id": 2
// 		},
// 		{
// 			"user": "Rasho",
// 			"pass": "Pedala",
// 			"id": 3
// 		},
// 		{
// 			"user": "Gosho",
// 			"pass": "Kokoshkarq",
// 			"id": 4
// 		}
// 	]
// }


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users' , (req , res) => {
	res.send(data)
})

// Connect to mysql
app.get('/user/:id',(req,res) => {
	const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database:'myData'
})
	const queryString = 'SELECT * FROM users WHERE id=?';
	const userID = req.params.id; 
	connection.query(queryString,[userID] (err ,rows , fields) => {
		if (err) {
			console.log("Error has occured" + err);
			return
		}
		// returning the whole content from the table(not good if sensitive info is in table)
		// res.json(rows)

		// returning filtered custom output from database (not the whole content)
		const users = rows.map(user => {
			return {firstName: user.firstname , lastName : user.lastname}
		})
	})
})

app.listen(3000)