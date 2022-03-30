const express = require('express')
const cors = require("cors")
const app = express()
const port = ""
require("dotenv").config()
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URL)
const userRouter = require("./src/routes/user")
const recordRouter = require("./src/routes/record")
const Airbrake = require('@airbrake/node');

new Airbrake.Notifier({
    projectId: 406523,
    projectKey: 'e6d1172b03271cd9e66e4360dae52a28',
    environment: 'production'
  });


app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(recordRouter)
server = app.listen(port,()=>{
    console.log("Server running on: " + port)
});

module.exports=server
