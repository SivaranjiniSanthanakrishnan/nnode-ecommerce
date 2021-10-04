const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName :{
        type: String,
        minLength : 5,
        maxLength : 25,
        required : true
    },
    quantity :{
        type: Number,
        required : true
    },
    price :{
        type: Number,
        required : true
    },
    description :{
        type: String,
        minLength : 5,
        maxLength : 250,
        required : true
    },
    userQuantity :{
        type: Number,
        required : true
    }
})

const Product = mongoose.model('Product', productSchema, 'product');
module.exports = Product;