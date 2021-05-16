const mongoose = require('mongoose');

const HumansSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        avatar: {
            type: String
        },
        age: {
            type: Number
        },
        likes: {
            type: String,
            required: true

        },
        does_not_like: {
            type: String,
            required: true
        }
    }
);

const HumansModel = mongoose.model('humans', HumansSchema)

module.exports = HumansModel;