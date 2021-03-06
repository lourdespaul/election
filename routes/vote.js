/**
 * Created by agil on 14/6/17.
 */
var express = require('express');
var Candidate = require('../models/candidates');
var router = express.Router();

router.get('/spl', function(req, res, next) {
    Candidate.find({role:'SPL'}, function (err,result) {
        res.render('vote',{title:'SPL', candidate:result});
    });
});

router.get('/SPL/:id', function (req, res, next) {
    var id = req.params.id;
    console.log(id);
    var user = req.user;
    console.log(user);
    if(user.spl) {
        Candidate.findByIdAndUpdate(id, {$push: {vote: user._id}}, function (err, result) {
            if (err) console.log(err);
            if (result) {
                user.update({$set:{spl:false}},function (err, result) {
                    if (err) throw err;
                    if(result){
                        res.redirect('/vote/aspl')
                    }
                });
            }
        });
    }
    else{
        res.redirect('/vote/aspl')
    }
});
//
router.get('/aspl', function (req,res, next) {
   Candidate.find({role:'ASPL'}, function (err,result) {
       if(err) res.send(err);
       if(result) res.render('vote',{title:'ASPL', candidate:result});
   });
});

router.get('/ASPL/:id', function (req, res, next) {
    var id = req.params.id;
    console.log(id);
    var user = req.user;
    console.log(user);
    if(user.aspl) {
        Candidate.findByIdAndUpdate(id, {$push: {vote: user._id}}, function (err, result) {
            if (err) console.log(err);
            if (result) {
                user.update({$set:{aspl:false}},function (err, result) {
                    if (err) throw err;
                    if(result){
                        if(user.gender == 'F')
                            res.redirect('/vote/headgirl');
                        else
                            res.redirect('/logout');
                    }
                });
            }
        });
    }
    else{
        if(user.gender == 'F')
            res.redirect('/vote/headgirl');
        else
            res.redirect('/logout');
        // res.redirect('/vote/headgirl')
    }
});

router.get('/headgirl', function (req,res, next) {
    Candidate.find({role:'HEADGIRL'}, function (err,result) {
        if(err) res.send(err);
        if(result) res.render('vote',{title:'HEADGIRL', candidate:result});
    });
});

router.get('/HEADGIRL/:id', function (req, res, next) {
    var id = req.params.id;
    console.log(id);
    var user = req.user;
    console.log(user);
    if(user.headgirl) {
        Candidate.findByIdAndUpdate(id, {$push: {vote: user._id}}, function (err, result) {
            if (err) console.log(err);
            if (result) {
                user.update({$set:{headgirl:false}},function (err, result) {
                    if (err) throw err;
                    if(result){
                        res.redirect('/logout')
                    }
                });
            }
        });
    }
    else res.redirect('/logout')
});


module.exports = router;
