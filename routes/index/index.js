'use strict';

var express = require('express');
var router = express.Router();

// requesting root directory
router.get('/', function(request, response) {
	console.log("ERROR");
	response.render('index.html');
});

module.exports = router;