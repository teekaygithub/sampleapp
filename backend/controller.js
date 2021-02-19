const mongoose = require('mongoose');
const Data = require('./model.js');

const registerData = async(req,res) => {
    const name = req.query.name;
    if (!name) {return res.status(400).send("Bad request, name required.");}

    const exists = await Data.findOne({name});

    if (exists) {
        console.log(`Data already exists for name ${name}`);
        res.status(400).send("Invalid request, data already exists");
    }

    Data.create({name: name})
        .then(() => {
            res.status(201).send("Data saved.");
        })
        .catch(err => {
            res.status(400).send(err);
        });
}

const getData = async(req,res) => {
    const datas = await Data.find();

    if (datas.length > 0) {
        res.status(200).send(datas);
    } else {
        res.status(404).send("No data found.");
    }
}

module.exports = {
    registerData,
    getData
}