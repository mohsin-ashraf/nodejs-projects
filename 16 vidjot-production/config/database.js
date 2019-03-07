if (process.env.NODE_ENV === 'production') {
  module.exports = { mongoURI: "mongodb://agent99:mohsin1@ds125723.mlab.com:25723/vidjod-prod" }
} else {
  module.exports = { mongoURI: "mongodb://localhost:27017/vidjot-dev" }
}