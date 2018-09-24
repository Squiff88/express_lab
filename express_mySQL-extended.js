const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dataBase = require('mysql');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.use(express.static('./public/'))

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


// connection to mySQL
const pool = dataBase.createPool({
	connectionLimit : 10,
	host: 'localhost',
	user: 'root',
	database:'myData'
})

function myConnection(){
	return pool
}


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users' , (req , res) => {
	res.send(data)
})

// Connect to mysql
app.get('/user/:id',(req,res) => {
	// targeting the table info and taking the id from users
	const queryString = 'SELECT * FROM users WHERE id=?';
	const userID = req.params.id; 
	myConnection().query(queryString, [userID] , (err ,rows , fields) => {
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

		res.end()
	})
})


app.post('/create_user' , (req, res) => {
	let firstname = req.body.firstname;
	let lastname = req.body.lastname;
	const queryString = ("INSERT INTO users (name_of_column(firstname) , name_of_column(lastname) ) VALUES(? , ?)")
	myConnection.query(queryString , [firstname , lastname] , (err , results , fields) => {
		if (err) {
			console.log('error has occured' + err);
			req.sendStatus(500);
			return
		}
		console.log('success !')
	})
	res.end()
	console.log(req.body.firstname , req.body.lastname);
})

app.listen(3000)