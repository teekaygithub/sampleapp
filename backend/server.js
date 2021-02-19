const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
const app = express();

app.get("/", (req,res) => {
    res.status(200).send("GET request done");
});

app.listen(process.env.PORT, () => {console.log(`Listening on port ${process.env.PORT}`)});