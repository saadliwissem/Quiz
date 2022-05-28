var express = require('express');
var router = express.Router();
const { getlanguages, readlanguage, deletelanguage, updatelanguage, createlanguage } = require('../controllers/language');
const { getAllquestion, createquestion, readquestion, updatequestion, deletequestion } = require('../controllers/Question')
const { getAllchoice, createchoice, readchoice, updatechoice, deletechoice } = require("../controllers/choice")

router.route('/languages')
    .get(getlanguages)
    .post(createlanguage);
//read, update and delete specific language
router.route('/languages/:languageid')
    .get(readlanguage)
    .put(updatelanguage)
    .delete(deletelanguage);

// define route for question
router.route('/languages/:languageid/questions')
    .get(getAllquestion)
    .post(createquestion);

router.route('/languages/:languageid/questions/:questionid')
    .get(readquestion)
    .put(updatequestion)
    .delete(deletequestion);


// define route for choices
router.route('/languages/:languageid/questions/:questionid/choices')
    .get(getAllchoice)
    .post(createchoice)

router.route('/languages/:languageid/questions/:questionid/choices/:choiceid')
    .get(readchoice)
    .put(updatechoice)
    .delete(deletechoice);


module.exports = router;