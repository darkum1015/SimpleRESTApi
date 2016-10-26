var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
    name: {type: String},
    species: {type: String}
});

module.exports = mongoose.model('Bear', BearSchema);
