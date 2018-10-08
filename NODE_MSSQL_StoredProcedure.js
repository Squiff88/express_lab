const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const app = express();

app.use(cors());

const config = {
	user: '....',
    password: '......',
    server: '......',
    database: '.....',
    options: {
        encrypt: false // Use this if you're on Windows Azure
    }
}


app.get('/eightteen' , (req,res) => {
	sql.connect(config).then(() => {
		let queryStr = `EXEC upToEighteen`;
		return sql.query(queryStr)
	})
	.then(data => {
		res.send(data.recordsets[0])
		res.end()
		sql.close()
	})
	.catch(err => console.log(err))
	
})

app.get('/twentyfive' , (req,res) => {
	sql.connect(config).then(() => {
		let queryStr = `EXEC upToTwentyFive`;
		return sql.query(queryStr)
	})
	.then(data => {
		res.send(data.recordsets[0])
		res.end()
		sql.close()
	})
	.catch(err => console.log(err))
});

app.get('/thirtyfive' , (req,res) => {
	sql.connect(config).then(() => {
		let queryStr = `EXEC defQuery`;
		return sql.query(queryStr)
	})
	.then(data => {
		res.send(data.recordsets[0])
		res.end()
		sql.close()
	})
	.catch(err => console.log(err))
})

app.get('/fourtyfive' , (req,res) => {
	sql.connect(config).then(() => {
		let queryStr = `EXEC defQuery`;
		return sql.query(queryStr)
	})
	.then(data => {
		res.send(data.recordsets[0])
		res.end()
		sql.close()
	})
	.catch(err => console.log(err))
})



app.listen(8000)
