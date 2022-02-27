const express = require('express')
const cors = require("cors")
const app = express()
const port = process.env.PORT || 4001
require("dotenv").config()
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URL)
const userRouter = require("./src/routes/user")
const recordRouter = require("./src/routes/record")

app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(recordRouter)
app.listen(port,()=>{
    console.log("Server running on: " + port)
})
