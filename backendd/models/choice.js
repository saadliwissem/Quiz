const mongoose = require("mongoose");
const choiseSchema = mongoose.Schema({
    choice: { type: String, required: true },
    istrue: {
        type: Boolean,
        required: true
    },
    img: String,
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }

});
mongoose.model("choise", choiseSchema)