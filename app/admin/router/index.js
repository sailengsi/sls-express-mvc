var express = require('express');
var router = express.Router();


require('./article')(router);
require('./user')(router);

module.exports = router;