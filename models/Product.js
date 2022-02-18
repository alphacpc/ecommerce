const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productTitle : { type: String, required: true, unique: true },
    productDesc : { type: String, required: true },
    productImg : { type: String, required: true, unique:true },
    productCat: { type: Array },
    productSize : { type: String },
    productColor : { type: String },
    productPrice : { type: Number , require:true }
}, {timestamps: true});


module.exports = mongoose.model("Product", productSchema);