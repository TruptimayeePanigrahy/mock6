const express = require("express")
require("dotenv").config()
const { connection } = require("./db")
const { userroute } = require("./routes/userroute")
const cors=require("cors")
const { quizroute } = require("./routes/quizroute")

const app = express()
app.use(express.json())
app.use(cors())




app.get("/", (req, res) => {
    res.send("home page")
})

app.use("/user", userroute)
app.use("/quiz",quizroute)

app.listen(process.env.port, async() => {
    try {
        await connection
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
    console.log("server is running")
})