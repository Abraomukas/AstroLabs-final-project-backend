const express = require('express');
const router = express.Router();

const DoggosModel = require('../models/DoggosModel')

// ...doggos/find
router.get(
    '/find',
    (req, res) => {
        DoggosModel
            .find(
                {
                    name: req.body.name
                }
            )
            .then(
                (dbDocument) => {
                    res.send(dbDocument);
                }
            )
            .catch(
                (error) => {
                    console.log("Mongoose error!", error);
                    res.send(error);
                }
            )
    }
);


// ...doggos/add
router.post(
    '/add',
    (req, res) => {
        const formData = {
            name: req.body.name,
            breed: req.body.breed,
            color: req.body.color,
            likes: req.body.likes,
            does_not_like: req.body.does_not_like
        }

        const newDoggosModel = new DoggosModel(formData);

        newDoggosModel
            .save()
            .then(
                (dbDocument) => {
                    res.send(dbDocument);
                }
            )
            .catch(
                (error) => {
                    console.log("Mongoose error!", error);
                    res.send(error);
                }
            )
    }
);

// ...doggos/update
router.post(
    '/update',
    (req, res) => {

        DoggosModel
            .findOneAndUpdate(
                { name: req.body.name },
                {
                    $set: {
                        name: req.body.name
                    }
                }
            )
            .then(
                (dbDocument) => {
                    res.send(dbDocument);
                }
            )
            .catch(
                (error) => {
                    console.log("Mongoose error!", error);
                    res.send(error);
                }
            );

    }
);

module.exports = router;