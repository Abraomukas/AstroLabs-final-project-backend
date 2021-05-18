const express = require("express");
const router = express.Router();
const ProductsModel = require("../models/ProductsModel.js");
const DoggosModel = require("../models/DoggosModel.js");

/*
 * For mongoose methods, see https://mongoosejs.com/docs/api/model.html
 */

// http://www.myapp.com/product/add
router.post("/add", (req, res) => {
  // 1. Capture data from client about Doggo  (e.g, Postman or Browser)
  const formData = {
    doggoName: req.body.doggoName,
    doggoBreed: req.body.doggoBreed,
    doggoAge: req.body.doggoAge,
    doggoSize: req.body.doggoSize,
    doggoforAdoption: req.body.doggoforAdoption,
    doggoTraining: req.body.doggoTraining,
    doggoSocializing: req.body.doggoSocializing,
    doggoDating: req.body.doggoDating,
    doggoForRehoming: req.body.doggoForRehoming,
  };

  // 2. Upload the data to MongoDB

  // Instantiating an object for this data specifically
  const newDoggosModel = new DoggosModel(formData);

  newDoggosModel
    .save() //  Promise
    .then(
      //resolved...
      (dbDocument) => {
        res.send(dbDocument);
      }
    )
    .catch(
      //rejected...
      (error) => {
        res.send(error);
      }
    );
});

// http://www.myapp.com/product/find
router.get("/find", (req, res) => {
  // Use the Mongo Model for Products to find a product
  DoggosModel.find({ doggoName: "Benito" })
    // If the item is found in the database...
    .then((dbDocument) => {
      res.send(dbDocument);
    })
    // If the item is NOT found in the database...
    .catch((error) => {
      console.log("mongoose error", error);
    });
});

// http://www.myapp.com/product/update
router.post("/update", (req, res) => {
  DoggosModel.findOneAndUpdate(
    { doggoName: "Benito" },
    {
      $set: {
        doggoAge: 4,
      },
    }
  )
    // If the doggo is found in the database...
    .then((dbDocument) => {
      res.send(dbDocument);
    })
    // If the item is NOT found in the database...
    .catch((error) => {
      console.log("mongoose error", error);
    });
});

// Export the routes
module.exports = router;
