const express = require('express');
const bodyParser = require('body-parser');
const util = require('./utilities/util.js');
const fs = require('fs');

let app = express();

app.use(express.static('views'));
app.use(bodyParser.text())
app.set('view engine', 'ejs')

let csv;

app.get('/', function(req, res) {
    res.render('index', { csv });
    res.status(200);
})

app.get('/download', function(req, res) {
    if(csv) {
        console.log('csv exists')
        fs.writeFile('csv-data.csv', csv, function(err) {
            if(err) {
                console.log('writeFile err')
                res.sendStatus(500)
                res.end()
            } else {
                console.log('no err with writefile')
                res.download('./csv-data.csv')
            }
        })
    } else {
        console.log('csv does not exist')
        res.send(500);
        res.end();
    }
})

app.post('/upload', function(req, res) {
    if(req.body) {
        if(!util.returnData(req.body)) {
            return res.sendStatus(400)
        } else {
            csv = util.returnData(req.body)
            res.redirect('/')
            res.end();
        }
    } else {
        return res.sendStatus(100)
    }
})

app.listen(3000, () => {
    console.log('running on port 3000')
});