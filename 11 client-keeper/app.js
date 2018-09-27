const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Client = require("./models/Client");
const port = 3000;
const app = express();

mongoose.connect("mongodb://localhost:27017/client-keeper", { useNewUrlParser: true }).then(result => {
    console.log("Connected to database successfully.....");
}).catch(err => {
    console.log("Unable to connect to database");
});

// setting up static folder
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get("/", (req, res) => {
    res.send("Please use /api/clients");
});

app.get("/api/clients", (req, res) => {
    Client.find().sort({ first_name: 1 }).then(clients => {
        res.send(clients)
    })
});

app.post("/api/clients", (req, res) => {
    const newClient = new Client({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone
    });
    newClient.save();
    res.json({
        object: newClient
    })
});

app.put("/api/clients/:id", (req, res) => {
    const id = req.params.id;
    Client.update({ _id: id }, {
        $set: {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone: req.body.phone
        }
    }, { upsert: true }, (err) => {
        if (err) {
            console.log("Error while updating the client");
        } else {
            console.log("Client is successfully update")
        }
    });
    res.json({
        message: "Client updated"
    })
});

app.delete("/api/clients/:id", (req, res) => {
    const id = req.params.id;
    Client.findOneAndDelete({ _id: req.params.id }, {}, (err, result) => {
        if (err) {
            console.log("ERROR : ", err);
        } else {
            console.log("REUSLT : ", result);
        }
    });
    res.json({
        _id: id
    })
});

app.listen(port, () => {
    console.log("Server is running on port ", port);
});