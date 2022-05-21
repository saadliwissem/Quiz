const mongoose = require("mongoose");
//const q = mongoose.model("question");
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
        'default': "data:image/png;base64,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"
    },
    category: {
        type: String,
        default: "web"
    },
    question: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'question'
    }]
});


mongoose.model('language', languageSchema);