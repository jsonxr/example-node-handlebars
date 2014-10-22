var path = require('path');
var express = require('express');
var handlebars = require('express-handlebars');

var app = express();

// Set the handlebars view handler
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
// Set the view path the same as server source. We aren't serving handlebars
// files to the client so they do not belong in public
app.set('views', path.join(__dirname));

// Add a basic route – index page
app.get('/', function (req, res) {
  var env = {
    CONTEXT_ROOT: '/blah/',
    UPLOAD_MAX: 10000
  }
  res.render('index', { env: env });
});

module.exports = app;