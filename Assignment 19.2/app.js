var express = require('express');
var bodyParser = require('body-parser');

var PORT = 3000;

var app = express();

// app.use('/static', express.static(__dirname + 'public'));
 
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

 app.listen(PORT, function() {
    app.get('/login', function(req, res){
        res.render('login');
    })
    
    app.get('/Register', function(req, res){
        res.render('Register');
    })

    app.get('/', function(req, res){
        res.render('index');
    })

    app.get('/AboutMe', function(req, res){
        res.render('AboutMe');
    })

    
    app.get('/Qualifications', function(req, res){
        res.render('Qualifications');
    })

    app.get('/ExtraQualifications', function(req, res){
        res.render('ExtraQualifications');
    })
    
    app.get('/ContactUs', function(req, res){
        res.render('ContactUs');
    })

    app.use(bodyParser.urlencoded({ 
        extended: false 
    }))
// parse application/json app.use(bodyParser.json())
    app.use(function (req, res) { 
        res.setHeader('Content-Type', 'text/plain') 
        res.write('you posted:\n') 
        res.end(JSON.stringify(req.body, null, 2)) 
    })
 });