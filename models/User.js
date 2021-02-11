const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        bcrypt: true,
    },
});

UserSchema.plugin(require('mongoose-bcrypt'));

module.exports = mongoose.model('users', UserSchema);