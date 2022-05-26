const mongoose = require("mongoose");
const languagemodel = mongoose.model("language");


//get all question of a specific language
const getAllquestion = (request, response) => {
        languagemodel.findById(request.params.languageid)
            .select('question')
            .exec((error, question) => {
                if (error) {
                    response
                        .status(400)
                        .json(error);
                } else {
                    if (question) {
                        response
                            .status(201)
                            .json(question);
                    } else {
                        return response
                            .status(404)
                            .json({
                                "message": "No question"
                            });
                    }
                }
            });
    }
    //get a specific question of a specific language
const readquestion = (request, response) => {
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
                        .status(400)
                        .json({
                            "message": "question not found"
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
                        "message": "No question found"
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
                    doAddquestion(request, response, language);
                }
            });
    } else {
        response
            .status(404)
            .json({ "message": "language not found" });
    }
}


const doAddquestion = (request, response, language) => {
    language.question.push({
        question: request.body.question,
        nbrAnswers: request.body.nbrAnswers,
        nbrcorrectAnswers: request.body.nbrcorrectAnswers,
        img: request.body.img
    });

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



//update a question of a specific language 

const updatequestion = (request, response) => {
        if (!request.params.languageid || !request.params.questionid) {
            return response
                .status(404)
                .json({
                    "message": "Not found, languageid and questionid are both required"
                });
        }
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
                            .status(400)
                            .json({
                                "message": "question not found"
                            });
                    } else {
                        question.question = request.body.question;
                        question.nbrAnswers = request.body.nbrAnswers;
                        question.nbrcorrectAnswers = request.body.nbrcorrectAnswers;
                        question.img = request.body.img;
                        language.save((error, language) => {
                            if (error) {
                                return response
                                    .status(400)
                                    .json(error);
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
                        });

                    }
                } else {
                    return response
                        .status(404)
                        .json({
                            "message": "No question found"
                        });
                }

            });
    }
    //delete a specific question of a specefic language

const deletequestion = (request, response) => {
    const { languageid, questionid } = request.params;
    if (!languageid || !questionid) {
        return response
            .status(404)
            .json({ 'message': 'Not found, languageid and questionid are both required' });
    }
    languagemodel
        .findById(languageid)
        .select('question')
        .exec((error, language) => {
            if (!language) {
                return response
                    .status(404)
                    .json({ 'message': 'language not found' });
            } else if (error) {
                return response
                    .status(400)
                    .json(error);
            }
            if (language.question && language.question.length > 0) {
                if (!language.question.id(questionid)) {
                    return response
                        .status(404)
                        .json({ 'message': 'question not found' });
                } else {
                    language.question.id(questionid).remove();
                    language.save(error => {
                        if (error) {
                            return response
                                .status(404)
                                .json(error);
                        } else {
                            response
                                .status(204)
                                .json(null);
                        }
                    });
                }
            } else {
                res
                    .status(404)
                    .json({ 'message': 'No Review to delete' });
            }
        });
}
module.exports = {
    getAllquestion,
    createquestion,
    readquestion,
    updatequestion,
    deletequestion
}