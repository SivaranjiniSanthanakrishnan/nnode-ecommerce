const Product = require('../models/Product');
const Joi = require('joi');

exports.postProduct = async (req,res,next) => {
    const schema = Joi.object({
        productName : Joi.string().alphanum().min(5).max(25).required(),
        quantity : Joi.number().required(),
        price : Joi.number().required(),
        description : Joi.string().min(5).max(250).required(),
        userQuantity : Joi.number().required()
    })

    var {error} = await schema.validate(req.body);
    if (error) {
        console.log(error)
        return res.status(400).send({msg : error.details[0].message}) 
    }

    const product = new Product({
        productName : req.body.productName,
        quantity : req.body.quantity,
        price : req.body.price,
        description : req.body.description,
        userQuantity : req.body.userQuantity
    })
    var response = await product.save();
    res.send(response);
}

exports.getProduct = async (req,res,next) => {
    var response = await Product.find();
    res.json(response)
}

exports.updateProductQuantity = async (req,res,next) => {
    const id = req.params.id;
    var response = await Product.findByIdAndUpdate(id,{
        userQuantity : req.body.userQuantity
    })
    res.send(response);
}
