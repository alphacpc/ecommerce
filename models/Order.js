const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId : {type: String, required: true},
    products:[
        {
            productId: { type : String },
            quantity: { type : Number, default: 1 }
        }
    ],
    amount: { type: Number, require: true},
    address: { type : Object, required : true},
    status : { type : Object, default: "encours"}
}, {timestamps: true})


module.exports = mongoose.model("Cart", OrderSchema)