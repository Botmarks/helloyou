var bodyParser = require('body-parser');
var http = require('http');
var express = require('express');

var app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('This is the Hello You! botmark. By botmarks.co 2016.');
});

app.post('/message', function (req, res) {
  res.status(200).send(JSON.stringify({
    content: 'Hello ' + req.body.content
  }));
});

app.get('/welcome', function (req, res) {
  res.status(200).send(JSON.stringify({
    content: 'I am HelloYou',
    options: [
      { type: 'web_url', title: 'Sample link', url: 'http://github.com/botmarks' }
    ]
  }));
});

http.createServer(app).listen(13300, function () {
  console.log('Botmark Hello You: HTTP on port 13300');
});