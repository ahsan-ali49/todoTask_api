const express = require("express");
const app = express();
require("dotenv").config();
const tasks = require("./routes/tasks");

app.use(express.json());
app.use("/api/v1/tasks", tasks);


const port = process.env.PORT || 3100;

// app.get("/hello", (req, res)=>{
//     res.send("Task Manager App");
// })



const start = ()=>{
    app.listen(port, console.log(`Server is listening at ${port}`))
}

start();