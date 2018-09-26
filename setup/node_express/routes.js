const express = require('express');
const app = express();
const router = express.Router();


router.get('/new' , (req , res) => {
	res.send('Routing inside')
})

router.post('/new/post' , (req , res) => {
	console.log('Routiiiing')
})


module.exports = router;