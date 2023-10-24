const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

module.exports = connectDB = (url)=>{
	mongoose.connect(url)
	.then(()=>console.log(`Connected to database...`))
	.catch((error)=>{
		console.log(`Error: ${error.message}`)
	})
}

