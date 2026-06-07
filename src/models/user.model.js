const mongoose = require('mongoose');

const useerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'artist'],
        default: 'user',
    }
})

const userModel = mongoose.model("user", useerSchema)

module.exports = userModel;