const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId : {type: String, default: null},
    dateOrder : { type : String},
    statusOrder : { type : Object, default: "encours"},
    payementOrder :   {type: String},
    productsOrders:[
        {
            name: { type : String },
            quantity: { type : Number, default: 1 }
        }
    ],
    amountOrder: { type: Number, require: true},
    fullnameUserOrder: { type : String},
    addressOrder: { type : Object, required : true},
    isSigned : { type : String},
    phoneUserOrder : { type: String},
    emailUserOrder: { type : String},
}, {timestamps: true})


module.exports = mongoose.model("Order", OrderSchema)