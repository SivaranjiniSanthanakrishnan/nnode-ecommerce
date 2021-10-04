var express = require('express');
var router = express.Router();
const ProductModule = require('../Module/productModule');

router.post('/saveproduct', ProductModule.postProduct)
router.get('/getproduct', ProductModule.getProduct)
router.put('/updateproduct/:id', ProductModule.updateProductQuantity)

module.exports = router;