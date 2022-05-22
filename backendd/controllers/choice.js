const mongoose = require("mongoose");
const languagemodel = mongoose.model("language");

//get all choices of a specific question of a specific language
const getAllchoice = (request, response) => {
    languagemodel.findById(request.params.languageid)
        .select('question.choice')
        .exec((error, choice) => {
            if (error) {
                response
                    .status(400)
                    .json(error);
            } else {
                if (choice) {
                    response
                        .status(201)
                        .json(choice);
                } else {
                    return response
                        .status(404)
                        .json({
                            "message": "No choice"
                        });
                }
            }
        });
}

//get a specific choice of a question of a specific language
const readchoice = (request, response) => {
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
            const question = language.question.id(request.params.questionid);
            if (question && question.choice.length > 0) {

                const choice = question.choice.id(request.params.choiceid);
                if (!choice) {
                    return response
                        .status(404)
                        .json({
                            "message": "choice not found"
                        });
                }
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
                        choice
                    };
                    return response
                        .status(200)
                        .json(res);
                }
            } else {
                return response
                    .status(404)
                    .json({
                        "message": "No choice found"
                    });
            }

        });
}


//create a new choice for a specific question of a specific language
const createchoice = (request, response) => {
    const languageid = request.params.languageid;
    const questionid = request.params.questionid;
    if (languageid && questionid) {
        languagemodel.findById(languageid)
            .select('question')
            .exec((error, language) => {
                if (error) {
                    response
                        .status(400)
                        .json(error);
                } else {

                    doAddchoice(request, response, language, questionid);
                }
            });
    } else {
        response
            .status(404)
            .json({ "message": "language not found" });
    }
}


const doAddchoice = (request, response, language, questionid) => {
    const question = language.question.id(questionid);
    question.choice.push({
        choice: request.body.choice,
        istrue: request.body.istrue,
        img: request.body.img
    });

    language.save((error, language) => {
        if (error) {
            response
                .status(400)
                .json(error);
        } else {
            let choice = question.choice[question.choice.length - 1];
            response
                .status(201)
                .json(choice);
        }
    });
}


//update a pecific choice of a specific question of a specific language 

const updatechoice = (request, response) => {
    if (!request.params.languageid || !request.params.questionid || !request.params.choiceid) {
        return response
            .status(404)
            .json({
                "message": "Not found, languageid , questionid andchoiceid are  required"
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
            const question = language.question.id(request.params.questionid);
            if (question && question.choice.length > 0) {
                const choice = question.choice.id(request.params.choiceid);
                if (!question) {
                    return response
                        .status(400)
                        .json({
                            "message": "question not found"
                        });
                }
                if (!choice) {
                    return response
                        .status(400)
                        .json({
                            "message": "choise not found"
                        });
                } else {
                    choice.choice = request.body.choice;
                    choice.istrue = request.body.istrue;
                    choice.img = request.body.img;
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
                                question: {
                                    question: question.question,
                                    id: request.params.questionid
                                },
                                choice
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

const deletechoice = (request, response) => {
    const { languageid, questionid, choiceid } = request.params;
    if (!languageid || !questionid || !choiceid) {
        return response
            .status(404)
            .json({ 'message': 'Not found, languageid , questionid and choiceid are  required' });
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
            const question = language.question.id(request.params.questionid);
            if (question && question.choice.length > 0) {
                const choice = question.choice.id(request.params.choiceid);
                if (!language.question.id(questionid)) {
                    return response
                        .status(404)
                        .json({ 'message': 'question not found' });
                }
                if (!question.choice.id(choiceid)) {
                    return response
                        .status(404)
                        .json({ 'message': 'choice not found' });
                } else {
                    question.choice.id(choiceid).remove();
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
    getAllchoice,
    readchoice,
    createchoice,
    updatechoice,
    deletechoice
}