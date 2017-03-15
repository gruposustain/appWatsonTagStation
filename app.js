var express = require('express');

var cfenv = require('cfenv');

var app = express();

app.use(express.static(__dirname + '/public'));

var appEnv = cfenv.getAppEnv();

app.listen(appEnv.port, '0.0.0.0', function() {
  
  console.log("server starting on " + appEnv.url);

        //criar javascript para essa parte separado para ser chamado dentro do app.js como route
        var watson = require('watson-developer-cloud');
        var fs = require('fs');

        var visual_recognition = watson.visual_recognition({
          api_key: '3ffaccfd128ddffb1933738f93021fdf543d7517',
          version: 'v3',
          version_date: '2016-05-20'
        });

        var params = {
          images_file: fs.createReadStream('./public/resources/car.png')
        };

        visual_recognition.classify(params, function(err, res) {
          if (err)
            console.log(err);
          else
            console.log(JSON.stringify(res, null, 2));

        });

});
