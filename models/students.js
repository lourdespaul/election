/**
 * Created by agil on 14/6/17.
 */
var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    name:String,
    username:String,
    password:String,
    gender:String,
    std:String,
    spl:{
        type:Boolean,
        default:true
    },
    aspl:{
        type:Boolean,
        default:true
    },
    headgirl:{
        type:Boolean,
        default:true
    }
});

var Student = mongoose.model('student', studentSchema);

module.exports = Student;
