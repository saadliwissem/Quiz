const mongoose = require("mongoose");
const modeel = mongoose.model("language");

//get all languages
const getlanguages = (request, response) => {
        modeel.find()
            .exec((error, languages) => {
                if (error) {
                    response
                        .status(400)
                        .json(error);
                } else {
                    if (languages) {
                        response
                            .status(201)
                            .json(languages);
                    } else {
                        return response
                            .status(404)
                            .json({
                                "message": "language not found"
                            });
                    }
                }
            });
    }
    //create a new language
const createlanguage = (request, response) => {
        console.log(request.body.name)
        modeel.create({
            name: request.body.name,
            version: request.body.version,
            nbrQuestion: request.body.nbrQuestion,
            passScore: request.body.passScore,
            description: request.body.description,
            imgsrc: request.body.imgsrc,
            category: request.body.category,

        }, (error, language) => {
            if (error) {
                response
                    .status(400)
                    .json(error);
            } else {
                response
                    .status(201)
                    .json(language);
            }
        });

    }
    //read specific language
const readlanguage = (request, response) => {
        const languageid = request.params.languageid;
        modeel
            .findById(languageid)
            .exec((err, language) => {
                if (!language) {
                    return response
                        .status(404)
                        .json({
                            "message": "language not found"
                        });
                } else if (err) {
                    return response
                        .status(400)
                        .json(err);
                }
                response
                    .status(200)
                    .json(language);

            });
    }
    //delte language by id 
const deletelanguage = (request, response) => {
        const { languageid } = request.params;
        if (languageid) {
            modeel
                .findByIdAndRemove(languageid)
                .exec((error, language) => {
                    if (error) {
                        return response
                            .status(400)
                            .json(error);
                    }
                    response
                        .status(204)
                        .json(null);
                });
        } else {
            response
                .status(404)
                .json({
                    "message": "No language"
                });
        }
    }
    //update a specific language

const updatelanguage = (request, response) => {
    const languageid = request.params.languageid;

    modeel.findById(languageid)
        .exec((error, language) => {
            if (!language) {
                return response
                    .status(404)
                    .json({
                        "message": "language id not found"
                    });
            } else if (error) {
                return response
                    .status(400)
                    .json(error);
            }
            language.name = request.body.name,
                language.version = request.body.version,
                language.nbrQuestion = request.body.nbrQuestion,
                language.passScore = request.body.passScore,
                language.description = request.body.description,
                language.imgsrc = request.body.imgsrc,
                language.category = request.body.category,
                language.save((error, language) => {
                    if (error) {
                        response
                            .status(404)
                            .json(error);
                    } else {
                        response
                            .status(200)
                            .json(language);

                    }
                });
        });
}

module.exports = {

    createlanguage,
    getlanguages,
    readlanguage,
    deletelanguage,
    updatelanguage

}