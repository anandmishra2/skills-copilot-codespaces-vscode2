// Create web server
var express = require('express');
var app = express();
var fs = require('fs');

// Read comments from comments.json
var comments = require('./comments.json');

// Create web server
app.get('/comments', function(req, res) {
  res.send(comments);
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
