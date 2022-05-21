var express = require('express');
var router = express.Router();
const { getlanguages, createlanguage, readlanguage, deletelanguage, updatelanguage } = require('../controllers/language');

router.route('/languages')
    .get(getlanguages)
    .post(createlanguage);


//read, update and delete specific contact
router.route('/languages/:languageid')
    .get(readlanguage)
    .put(updatelanguage)
    .delete(deletelanguage);
/*
// define route for address
router.route('/contacts/:contactid/address')
    .get(getAllAddress)
    .post(createAddress);

router.route('/contacts/:contactid/address/:addressid')
    .get(readAddress)
    .put(updateAddress)
    .delete(deleteAddress);*/

module.exports = router;