const express = require("express");
const app = express();
require("dotenv").config();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connectDB");

app.use(express.json());
app.use("/api/v1/tasks", tasks);


const port = process.env.PORT || 3100;

// app.get("/hello", (req, res)=>{
//     res.send("Task Manager App");
// })



const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening at ${port}`))    
    } catch (error) {
        console.log(error.message);
    }
    
}

start();