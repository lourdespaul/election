/**
 * Created by agil on 14/6/17.
 */
var express = require('express');
var Student = require('../models/students');
var router = express.Router();

/* GET users listing. */
router.post('/register', function(req, res, next) {
    var data = req.body;
    var student = new Student({
        name:data.name,
        gender:data.gender,
        password:data.password,
        username:data.username,
        std:data.std
    });
    student.save(function (err,result) {
        if (err) console.log(err);
        if(result) {
            console.log(result);
            res.send(result._id);
        }
    });
});

module.exports = router;
