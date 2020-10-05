var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { quote: "Texto que ira mudar devido ao AJAX" });
});

router.post('/', function(req, res, next) {
  var formidable = require('formidable');
  var fs = require('fs');
  var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        var oldpath = files.filetoupload.path;
        var newpath = './public/' + files.filetoupload.name;
        fs.rename(oldpath, newpath, function(err) {
            if (err) throw err;
            res.write('File uploaded');
            res.end();
        });
    });
});

router.get('/ajax', function(req, res) {
  res.render('ajax', { quote: "Texto que ira mudar devido ao AJAX" });
});

router.post('/ajax', function(req, res){
  res.render('ajax', {quote: req.body.quote});
});

module.exports = router;
