const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    categoryTitle : { type: String, required: true, unique: true},
    categoryImg : { type: String, required: true },
    productDesc : { type: String },
}, {timestamps: true});


module.exports = mongoose.model("Category", categorySchema);