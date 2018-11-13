var express = require('express');

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
    // app.get('/', function(req, res){
    //     res.render('index');
    // })

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
 });