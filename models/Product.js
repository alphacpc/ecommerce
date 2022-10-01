const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productTitle : { type: String, required: true},
    productImg : { type: String, required: true },
    productMarque : { type: String, required: true },
    productCat: { type: String },
    productPrice : { type: Number, require:true },
    productPricePromo : { type: Number },
    productDescShort : { type: String, required: true },
    productDescLong : { type: String },
    productQuantity : { type: Number, required: true },
    productGallery : { type: Array },
}, {timestamps: true});


module.exports = mongoose.model("Product", productSchema);