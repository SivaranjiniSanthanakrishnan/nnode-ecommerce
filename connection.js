exports.connect = () => {
    try {
        const mongoose = require('mongoose');
        mongoose.connect('mongodb://localhost:27017/ecommerce', {useNewUrlParser : true, useUnifiedTopology: true})
    } catch(err) {
        console.log(err);
        process.exit()
    }
}