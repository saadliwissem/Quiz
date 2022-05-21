const mongoose = require("mongoose");
const c = mongoose.model("choise");
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
    language: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "language"
    },
    choice: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'choice'
    }]
});


mongoose.model('question', QuestionSchema);