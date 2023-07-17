const { usermodel } = require("../models/usermdel")
const express=require("express")
const userroute=express.Router()


userroute.post("/login", async (req, res) => {
    try {
        const { username, email } = req.body
        const userpresent = await usermodel.findOne({ email })
        if (userpresent) {
            return res.status(400).send({"msg":"user already present"})
        }
        const newuser = new usermodel({ username, email })
        await newuser.save()
        res.status(200).send({"msg":"user added successfully!!","user":newuser})
        
    } catch (error) {
        console.log(error)
    }
})










module.exports={userroute}