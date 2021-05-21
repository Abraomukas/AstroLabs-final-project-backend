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
        password: {
            type: string,
            required: true
        },
        contact: {
            type: String
        },
        address: {
            type: String
        }
    }
);

const HumansModel = mongoose.model('humans', HumansSchema)

module.exports = HumansModel;