const mongoose = require('mongoose');

const DoggosSchema = new mongoose.Schema (
    {
        name: {
            type: String,
            required: true
        },
        breed: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
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

const DoggosModel = mongoose.model('doggos', DoggosSchema)

module.exports = DoggosModel;