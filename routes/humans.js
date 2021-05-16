const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;

const HumansModel = require('../models/HumansModel')

// ...humans/find
router.get(
    '/find',
    (req, res) => {
        HumansModel
            .find(
                {
                    email: req.body.email
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


// ...humans/add
router.post(
    '/add',
    (req, res) => {

        // data to be captured (via Postman or the browser)
        const formData = {
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            age: req.body.age,
            likes: req.body.likes,
            does_not_like: req.body.does_not_like
        }

        // new instance of HumansModel
        const newHumansModel = new HumansModel(formData);

        // checking if the email exists
        HumansModel.findOne({
            email: formData.email
        })
            // of the connection to MongoDB is working
            .then(
                (dbDocument) => {
                    // if the email is in the database already >>> rejection
                    if (dbDocument) {
                        res.send("This email is already associated with another account!");
                    }
                    // if the email is not in the database >>> registration
                    else {
                        if (Object.values(req.files).length > 0) {
                            cloudinary.uploader.upload(
                                files[0].path,
                                (cloudinaryErr, cloudinaryRes) => {
                                    if (cloudinaryErr) {
                                        console.log(cloudinaryErr);
                                    } else {
                                        newHumansModel.avatar = cloudinaryRes.url;
                                    }
                                }
                            );
                        }
                        // generate salt with bcryptjs
                        bcryptjs.genSalt(
                            (err, salt) => {
                                // hash the password with the salt
                                bcryptjs.hash(
                                    formData.password,
                                    salt,
                                    (err, hashedPassword) => {
                                        // replace the original password with its encrypted version
                                        newHumansModel.password = hashedPassword;

                                        // save registration details
                                        newHumansModel
                                            .save()
                                            .then(
                                                (dbDocument) => {
                                                    res.send(dbDocument);
                                                }
                                            )
                                            .catch(
                                                (error) => {
                                                    res.send(error);
                                                }
                                            );
                                    }
                                );
                            }
                        );
                    }
                }
            )
            // if MongoDB is M.I.A.
            .catch(
                (error) => {
                    console.log('error', error);
                    res.send(error);
                }
            );
    }
);

// ...humans/login
router.post(
    '/login',
    (req, res) => {
        // data to be captured (via Postman or the browser)
        const formData = {
            "email": req.body.email,
            "password": req.body.password
        }

        // check for email match in the database
        HumansModel
            .findOne({ email: formData.email })
            // if the database responds
            .then(
                (dbDocument) => {
                    // if the email does not exist >>> rejection
                    if (!dbDocument) {
                        res.send("Wrong email!");
                    }
                    // if the email exists >>> document retrieval
                    else {
                        // password check
                        bcryptjs
                            .compare(formData.password, dbDocumment.password)
                            // if the comparison is successful
                            .then(
                                (isAMatch) => {
                                    // if the password is incorrect >>> rejection
                                    if (!isAMatch) {
                                        res.send("Wrong password!");
                                    }
                                    // if the password is correct >>> send the JWT
                                    else {
                                        // prepare the payload
                                        const payload = {
                                            id: dbDocument.id
                                        }

                                        // send JWT to the client
                                        jwt.sign(
                                            payload,
                                            jwtSecret, (err, jsonwebtoken) => {
                                                res.send(jsonwebtoken);
                                            }
                                        );
                                    }
                                }
                            )
                            // if the comparison is unsuccessful
                            .catch(
                                (error) => {
                                    console.log('error', error);
                                    res.send(error);
                                }
                            );
                    }
                }
            )
            // if MongoDB is M.I.A.
            .catch(
                (error) => {
                    console.log('error', error);
                    res.send(error);
                }
            );
    }
);

// ...humans/update
router.post(
    '/update',
    (req, res) => {

        HumansModel
            .findOneAndUpdate(
                { email: req.body.email },
                {
                    $set: {
                        email: req.body.email
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