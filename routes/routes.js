const express = require('express');

const {homeView } = require('../controllers/homeController');
const {contactView } = require('../controllers/contactController');
const {servicesView } = require('../controllers/servicesController');
const {aboutusView } = require('../controllers/aboutController');

const router = express.Router();

router.get('/home', homeView);
router.get('/', homeView);

router.get('/contact', contactView);
router.get('/book', contactView);

router.get('/services/:appliance', servicesView);
router.get('/services', servicesView);

router.get('/aboutus', aboutusView);

module.exports = router;