const { quizmodel } = require("../models/quizmodel")
const express = require("express")

const quizroute = express.Router()

quizroute.post("/addquiz", async (req, res) => {
    try {
        const data = req.body
        const newdata = new quizmodel(data)
        await newdata.save()
        res.status(200).send({ "msg": "quiz addedd successfully!!" })
    } catch (error) {
        console.log(error)
    }
})

quizroute.get("/getquiz", async (req, res) => {
    try {
        const data = await quizmodel.find()
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
})

quizroute.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params
        const {title,description}=req.body
        console.log(title,description)
        let quiz= await quizmodel.findOne({_id:id})

        quiz.title=title
        quiz.description=description
        await quiz.save()
       
        res.status(200).send({"msg":"quiz updated succcessfully!1"})
    } catch (error) {
        console.log(error)
    }
})

quizroute.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params
        const data = await quizmodel.findByIdAndDelete({ _id: id })
        res.status(200).send({"msg":"Quiz deleted Successfull!!"})
        
    } catch (error) {
        console.log(error)
    }
})

module.exports={quizroute}