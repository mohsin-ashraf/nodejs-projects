const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/shopapi", { useNewUrlParser: true }).then(
  (res) => {
    console.log("Connected to Database Successfully.")
  }
).catch(() => {
  console.log("Conntection to database failed.");
});
app = express();

const productRouter = require("./routes/products");
const orderRouter = require("./routes/orders");
const userRouter = require("./routes/user");

app.use(morgan('dev'));
app.use('uploads', express.static('uplaods'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*');
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT , POST , PATCH , DELETE");
    return res.status(200).json({});
  }
  next();
});


app.use('/products', productRouter);
app.use('/orders', orderRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;