const express = require('express');
const sql = require('mssql')
const app = express();

const config = {
	user: 'sa',
    password: 'eraser',
    server: 'SQUIFFY',
    database: 'AdventureWorks2012',
    options: {
        encrypt: false // Use this if you're on Windows Azure
    }
}
app.get('/' , (req,res) => {
	sql.connect(config).then(() => {
		let queryStr = `EXEC defQuery`;
		return sql.query(queryStr)
	})
	.then(data => {
		res.send(data.recordsets[0])
	})
	.catch(err => console.log(err))
})


app.listen(8000)



