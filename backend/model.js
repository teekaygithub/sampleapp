const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
	name :  {
        type : String,
        required: true
    }
});

const Data = mongoose.model("data", dataSchema);

module.exports = Data