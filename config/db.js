/**
 * Created by agil on 14/6/17.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://agil:9952726466@ds111882.mlab.com:11882/agilmongo');

module.exports = mongoose;