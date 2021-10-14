const mongoose = require("mongoose");

const trainerSchema = mongoose.Schema({
    code: String,   
    name: String,
    age: Number,
    profile: String,
    experience: Number,
    email: String,
    imageUrl: String
});

module.exports = mongoose.model("Trainer", trainerSchema);