const productController = require('../controller/productController');
const Router = require('express').Router;
const router = Router();

router.post('/product', productController.create);
router.get('/product', productController.getAll);
router.get('/product/:id', productController.getOne);
router.put('/product', productController.update);
router.delete('/product/:id', productController.delete);

router.get('/cities', (req, res) => {
    res.json([
        { id: 1, name: "Алматы" },
        { id: 2, name: "Астана" },
        { id: 3, name: "Атырау" },
        { id: 4, name: "Шымкент" },
        { id: 5, name: "Талдыкорган" },
    ])
})

module.exports = router;