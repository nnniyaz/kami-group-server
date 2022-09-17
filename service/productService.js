const Product = require("../model/product.js");
const fileService = require("./fileService.js");

class ProductService {
    async create(product, images) {
        const files = fileService.saveFile(images);
        const newProduct = { ...product, pricelist: JSON.parse(product.pricelist) };
        const createdProduct = await Product.create({ ...newProduct, images: files });
        return createdProduct;
    }

    async getAll() {
        const products = await Product.find();
        return products;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const product = await Product.findById(id);
        return product;
    }

    async update(product, images) {
        console.log(product)
        if (!product._id) {
            throw new Error('не указан ID')
        }
        const files = fileService.saveFile(images);
        const newProduct = { ...product, images: files, pricelist: JSON.parse(product.pricelist) };
        const updatedProduct = await Product.findByIdAndUpdate(newProduct._id, newProduct, { new: true })
        return updatedProduct;
    }

    async delete(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const product = await Product.findByIdAndDelete(id);
        return product;
    }
}


module.exports = new ProductService();