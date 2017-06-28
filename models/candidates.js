/**
 * Created by agil on 14/6/17.
 */
var mongoose = require('mongoose');

var candidateSchema = new mongoose.Schema({
    name:String,
    image:String,
    role:String,
    vote:[{type:mongoose.Schema.ObjectId, ref:'student'}]

});

var Candidate = mongoose.model('candidate', candidateSchema);

module.exports = Candidate;