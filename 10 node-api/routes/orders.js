const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const checkAuth = require("../middlewares/check-auth");
const Order = require("../models/Order");
const Product = require("../models/Product");
router.get("/", (req, res, next) => {
  Order.find().select('_id quantity product').populate('product', '_id name price').exec().then(result => {
    res.status(200).json({
      count: result.length,
      orders: result.map(doc => {
        return {
          _id: doc._id,
          product: doc.product,
          quantity: doc.quantity,
          request: {
            type: "GET",
            url: "http://localhost:3000/orders/" + doc._id
          }
        }
      }),
      request: {
        type: "GET",

      }
    });
  }).catch(err => {
    res.status(500).json(err);
  })
});

router.post('/', checkAuth, (req, res, next) => {
  console.log("Product Id", req.body.productId);
  Product.findById(req.body.productId).then(product => {
    if (product) {
      const order = new Order({
        _id: mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: req.body.productId
      });
      return order.save();
    }
  }).then(result => {
    console.log(result);
    res.status(201).json({
      message: "Order stored",
      createdOrder: {
        _id: result._id,
        product: result.product,
        quantity: result.quantity
      },
      request: {
        type: "POST",
        url: "http://localhost:3000/orders/" + result._id
      }
    });
  }).catch(error => {
    res.status(500).json({
      message: "Product not found",
      error: error
    })
  });
});

router.get("/:id", checkAuth, (req, res, next) => {
  Order.findById(req.params.orderId)
    .exec()
    .then(order => {
      res.status(200).json({
        order: order,
        request: {
          type: "GET",
          url: "http://localhost:3000/orders"
        }
      });
    }).catch(error => {
      res.status(500).json({
        error: error
      })
    });
});

router.delete("/:id", checkAuth, (req, res, next) => {
  Order.remove({ _id: req.params.orderId }).exec()
    .then(result => {
      res.status(200).json({
        message: "Order deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/order",
          body: {
            productId: "ID",
            quantity: "Number"
          }
        }
      });
    }).catch(error => {
      res.status(500).json({
        error: error
      });
    });
});



module.exports = router;