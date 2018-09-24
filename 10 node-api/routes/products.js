const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const router = express.Router();
const Product = require("../models/Product");
const checkAuth = require("../middlewares/check-auth");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads/');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname)
  }
})


const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
});


router.get("/", (req, res, next) => {
  Product.find().select('name price _id productImage').exec().then(docs => {
    if (docs.length >= 1) {
      const response = {
        count: docs.length,
        products: docs.map(doc => {
          console.log(doc);
          return {
            name: doc.name,
            price: doc.price,
            _id: doc._id,
            productImage: "/uploads/" + doc.productImage,
            request: {
              type: "GET",
              url: "http://localhost:3000/products/" + doc._id
            }
          }
        })
      }
      res.status(200).json(response);
    } else {
      res.status(200).json({ message: "Our database is empty :(" });
    }
  })
});



router.post("/", checkAuth, upload.single('productImage'), (req, res, next) => {
  console.log("LOGGING THE FILE HERE : ", req.file);
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    productImage: req.file.filename
  });
  product.save().then(result => {
    // console.log("Here is the result ", result);
    res.status(201).json({
      message: "Handling POST request for /products",
      craetedProduct: {
        name: product.name,
        price: product.price,
        productImage: req.file.path,
        id: product._id,
        request: {
          type: "POST",
          url: "http://localhost:3000/products/" + product._id
        }
      }
    });
  }).catch(err => {
    console.log("Error ", err);
    res.status(500).json({
      error: err
    })
  });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Product.findById(id).exec().then(doc => {
    console.log("Result ", doc);
    if (doc) {
      res.status(200).json(doc);
    } else {
      res.status(404).json({
        message: "No valid product found for the provided ID"
      })
    }
  }).catch(err => {
    console.log("Error ", err);
    res.status(500).json({
      error: err
    })
  })
});

router.patch("/:id", checkAuth, (req, res, next) => {
  const id = req.params.id;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Product.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      console.log("updated Result ", result);
      res.status(200).json(result);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: error
      })
    });

});

router.delete("/:id", checkAuth, (req, res, next) => {
  const id = req.params.id;
  Product.remove({ _id: id }).exec().then(result => {
    res.status(200).json(result);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});




module.exports = router;