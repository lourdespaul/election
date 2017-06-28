/**
 * Created by agil on 14/6/17.
 */
var express = require('express');
var Candidate = require('../models/candidates');
var router = express.Router();

router.post('/',function (req,res,next) {
    var data = req.body;
    var candidate = new Candidate({
        name:data.name,
        image:data.image,
        role:data.role
    });
    candidate.save(function (err, result) {
        if(err) res.send(err);
        if(result) res.send(result);
    })
});

module.exports = router;