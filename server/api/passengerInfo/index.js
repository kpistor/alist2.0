'use strict';

var express = require('express');
var controller = require('./passengerInfo.controller');

var router = express.Router();

router.post('/', controller.create);

module.exports = router;