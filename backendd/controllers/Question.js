const mongoose = require("mongoose");
const modeel = mongoose.model("question");
const languagemodel = mongoose.model("language");


//get all question of a specific language
const getquestion = (request, response) => {
        languagemodel
            .findById(request.params.languageid)
            .select('name question')
            .exec((error, language) => {
                if (!language) {
                    return response
                        .status(404)
                        .json({
                            "message": "language not found"
                        });
                } else if (error) {
                    return response
                        .status(400)
                        .json(error);
                }
                if (language.question && language.question.length > 0) {
                    const question = language.question.id(request.params.questionid);
                    if (!question) {
                        return response
                            .status(404)
                            .json({
                                "message": "Question not found"
                            });
                    } else {
                        res = {
                            language: {
                                name: language.name,
                                id: request.params.languageid
                            },
                            question
                        };
                        return response
                            .status(200)
                            .json(res);
                    }
                } else {
                    return response
                        .status(404)
                        .json({
                            "message": "No Question found"
                        });
                }

            });
    }
    //create a new question for a specific language


const createquestion = (request, response) => {
    const languageid = request.params.languageid;
    if (languageid) {
        languagemodel.findById(languageid)
            .select('question')
            .exec((error, language) => {
                if (error) {
                    response
                        .status(400)
                        .json(error);
                } else {
                    addquestion(request, response, language)
                    doAddquestion(request, response, language);
                }
            });
    } else {
        response
            .status(404)
            .json({ "message": "language not found" });
    }
}
const addquestion = (request, response, language) => {

    modeel.create({
        question: request.body.question,
        nbrAnswers: request.body.nbrAnswers,
        nbrcorrectAnswers: request.body.nbrcorrectAnswers,
        img: request.body.img,
        language: language.id
    }, (error, question) => {
        if (error) {
            response
                .status(400)
                .json(error);
        } else {
            if (!mongoose.Types.ObjectId.isValid(question.id)) {
                theid = question.id;
                console.log(theid)
                language.question.push({
                    theid
                });
            } else {

            }
            response
                .status(201)
                .json(question);

        }
    });

}

const doAddquestion = (request, response, language) => {

    language.save((error, language) => {
        if (error) {
            response
                .status(400)
                .json(error);
        } else {
            let question = language.question[language.question.length - 1];
            response
                .status(201)
                .json(question);
        }
    });
}


//a function that returns an array of  
module.exports = {
    getquestion,
    createquestion
}