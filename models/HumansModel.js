const mongoose = require('mongoose');

const HumansSchema = new mongoose.Schema(
    {
        avatar: {
            type: String
        },
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
        age: {
            type: Number
        },
        likes: {
            type: String,
            required: true
        }
    }
);

const HumansModel = mongoose.model('humans', HumansSchema)

module.exports = HumansModel;