const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    imageUrl: {type: String, requires: true},
    userId: {type: String, required: true},
    price: {type: Number, required: true}
});

module.exports = mongoose.model('thing', thingSchema);
