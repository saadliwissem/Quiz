var express = require('express');
var router = express.Router();
const { getlanguages, createlanguage, readlanguage, deletelanguage, updatelanguage } = require('../controllers/language');
const { getquestion, createquestion } = require('../controllers/Question')
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
    .get(getquestion)
    .post(createquestion);
/*
router.route('/contacts/:contactid/address/:addressid')
    .get(readAddress)
    .put(updateAddress)
    .delete(deleteAddress);*/

module.exports = router;