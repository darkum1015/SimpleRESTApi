var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
    species: {type: String},
    name: {type: String}

});

module.exports = mongoose.model('Bear', BearSchema);
