const express = require('express')

	const app = express()

	app.use(express.static(__dirname + '/dist/add-to-cart'))

	app.get('*',(req,res)=>{
    	res.sendFile('index.html',{root:'dist/taskApp/'})
	})

	app.listen(process.env.PORT)