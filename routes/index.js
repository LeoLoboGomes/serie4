var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.query.form) {
    res.render('index', { quote: "Texto que ira mudar devido ao AJAX" });
  }
  else {
    console.log(req.query.form);
  }
});


router.post('/', function(req, res, next) {
  var formidable = require('formidable');
  var fs = require('fs');
  var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {

      if (files.filetoupload.size === 0) {
        res.write('File not selected');
        res.end();
      } else {
        var oldpath = files.filetoupload.path;
        var newpath = './public/' + files.filetoupload.name;
        fs.rename(oldpath, newpath, function(err) {
            if (err) throw err;
            res.write('File uploaded');
            res.end();
        });
      }
    });
});

module.exports = router;
