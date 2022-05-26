const mongoose = require("mongoose");


//choice schema
const choiceSchema = mongoose.Schema({
    choice: { type: String, required: true },
    istrue: {
        type: Boolean,
        //required: true,
        default: false
    },
    img: String,
});
//question schema
const QuestionSchema = new mongoose.Schema({
    question: String,
    nbrAnswers: {
        type: Number,
        required: true
    },
    nbrcorrectAnswers: {
        type: Number,
        required: true
    },
    img: String,

    choice: [choiceSchema]
});



//language schema
const languageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    version: {
        type: Number,
        required: true
    },
    nbrQuestion: {
        type: Number,
        'default': 20
    },
    passScore: {
        type: Number,
        'default': 70
    },
    description: {
        type: String,
        required: true
    },
    imgsrc: {
        type: String,
        'default': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpHgdjQViscBPCMfmX4_fyvIK0Tqg3WB5tmNQmYr7DrA&s"
    },
    category: {
        type: String,
        default: "web"
    },
    question: [QuestionSchema]
});
mongoose.model('language', languageSchema);