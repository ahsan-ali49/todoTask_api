const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3100;

app.get("/hello", (req, res)=>{
    res.send("Task Manager App");
})

const start = ()=>{
    app.listen(port, console.log(`Server is listening at ${port}`))
}

start();