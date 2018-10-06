const express = require('express');
const app = express();
const sql = require('mssql')

const config = {
    user: '...',
    password: '....',
    server: '....',
    database: '...',
    options: {
        encrypt: false // Use this if you're on Windows Azure
    }
}
 
app.get('/' , (req, res) => {

const pool1 = new sql.ConnectionPool(config, err => {

    pool1.request()
    .query('SELECT TOP 10 * FROM Person.PersonPhone', (err, result) => {
        let obj = result.recordsets[0];
        let myObj = {};
        let singleObj = obj.map(data => {
            if (data.BusinessEntityID === 7) {
                myObj = data
                return myObj
            }
            if (data.BusinessEntityID === 8) {
                myObj.BusinessEntityIDTwo = data.BusinessEntityID;
                myObj.PhoneNumberTwo = data.PhoneNumber
                myObj.PhoneNumberTypeIDTwo = data.PhoneNumberTypeID
                myObj.ModifiedDateTwo = data.ModifiedDate
                return myObj
            }

        })
        res.send(myObj)
        sql.close()

     
    })
 
    })
    pool1.on('error', err => {
        console.log(err)
        res.write('Error has occured')
    })
     
})
let server = app.listen(3000, function () {
 console.log('Server is running.. on Port 3000');
});