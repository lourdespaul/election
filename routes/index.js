var express = require('express');
var router = express.Router();
var Student = require('../models/students');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {
   var data = req.body;
   Student.find({std:data.std}, function (err,result) {
        if(err) throw err;
        if(result){
          res.render('index',{students:result});
        }
    })
});

module.exports = router;
