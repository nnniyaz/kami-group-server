const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    images: [{ type: String }],
    status: { type: String },
    pricelist: { type: Array }
})

module.exports = mongoose.model('Product', Product)