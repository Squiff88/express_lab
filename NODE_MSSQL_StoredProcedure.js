const express = require('express');
const sql = require('mssql')
const app = express();

const config = {
	user: '....',
    password: '....',
    server: '....',
    database: '....',
    options: {
        encrypt: false // Use this if you're on Windows Azure
    }
}
app.get('/' , (req,res) => {
	sql.connect(config).then(() => {
		// FIRST CREATE THE PROCEDURE IN MS MANAGEMENT
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



