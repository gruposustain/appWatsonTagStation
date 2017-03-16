var express = require('express');

var cfenv = require('cfenv');
var consultaMetadado = require('./js/consultaMetadado.js');
var app = express();

app.use(express.static(__dirname + '/public'));

var appEnv = cfenv.getAppEnv();

app.listen(appEnv.port, '0.0.0.0', function() {
    console.log("server starting on " + appEnv.url);
});
