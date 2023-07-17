const mongoose = require("mongoose")

const quizschema = mongoose.Schema({
    creator:String,
    title: String,
    description: String,
    questions:Array
})

const quizmodel = mongoose.model("quiz", quizschema)

module.exports={quizmodel}