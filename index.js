var express = require('express');
var app = express();
var ip = require("ip");

app.get('/', function (req, res) {
    res.send(`{ "response": "Hello From Henrypham, message response from server internal: ${ip.address()} ahihi" }`);
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World ci/cd  " }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
