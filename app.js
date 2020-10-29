const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

// app
const app = express()

// db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log("DB Connected"))

app.get("/", (req, res) => {
    res.send("hello from node updated")
})

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})