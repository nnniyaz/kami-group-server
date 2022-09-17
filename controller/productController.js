const productService = require("../service/productService");

class ProductController {
    async create(req, res) {
        try {
            const product = await productService.create(req.body, req.files);
            res.json(product)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const products = await productService.getAll();
            if (req.query.page) {
                if (req.query.limit) {
                    const page = parseInt(req.query.page);
                    const limit = parseInt(req.query.limit);

                    const startIndex = (page - 1) * limit;
                    const endIndex = page * limit;

                    const resultProducts = products.slice(startIndex, endIndex)
                    return res.json({ total: products.length, products: resultProducts });
                }
                const page = parseInt(req.query.page);
                const limit = 5;

                const startIndex = (page - 1) * limit;
                const endIndex = page * limit;

                const resultProducts = products.slice(startIndex, endIndex)
                return res.json({ total: products.length, products: resultProducts });
            }
            else {
                return res.json({ total: products.length, products: products });
            }
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const product = await productService.getOne(req.params.id);
            return res.json(product)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            console.log(req.body)
            const updatedProduct = await productService.update(req.body, req.files);
            return res.json(updatedProduct);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const product = await productService.delete(req.params.id);
            return res.json(product)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new ProductController();