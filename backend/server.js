const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const {registerData, getData} = require('./controller.js');

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', err => {
    console.log(`There was an error connecting to the database: ${err}`);
})

db.once("open", () => {
    console.log("You have successfully connected to your mongo database");
})

const app = express();

app.get("/", (req,res) => {
    res.status(200).send("GET request done");
});

app.get("/all", getData);

app.post("/", registerData);

app.listen(process.env.PORT, () => {console.log(`Listening on port ${process.env.PORT}`)});