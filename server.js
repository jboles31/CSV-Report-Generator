const express = require('express');
const bodyParser = require('body-parser');
const util = require('./utilities/util.js');

let app = express();

app.use(express.static('client'));
app.use(bodyParser.text())

app.get('/', function(req, res) {
    res.status(200);
})

app.post('/upload', function(req, res) {
    //console.log('req.body', req.body)
    util.returnData(req.body);
})

app.listen(3000, () => {
    console.log('running on port 3000')
});