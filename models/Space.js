const mongoose = require('mongoose');

const SpaceSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    geolocation: {
        type: String,
        required: true,
    },
    cost: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('spaces', SpaceSchema);