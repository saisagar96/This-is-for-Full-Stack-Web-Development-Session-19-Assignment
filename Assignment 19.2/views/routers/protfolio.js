var express = require('express');

var router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }))

router.get('/', function(req, res){
    res.render('AboutMe');
})


router.get('/Qualifications', function(req, res){
    res.render('Qualifications');
})

router.get('/ExtraQualifications', function(req, res){
    res.render('ExtraQualifications');
})

router.get('/ContactUs', function(req, res){
    res.render('ContactUs');
})

module.exports = router;