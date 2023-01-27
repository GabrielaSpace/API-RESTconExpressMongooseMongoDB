const express = require('express')
const productsApiController = require("../controllers/productsApiController");

const productsApiRouter = express.Router();

// /products
// GET http://localhost:3000/products/3
// GET http://localhost:3000/products/4
// GET http://localhost:3000/products
// /products
productsApiRouter.get('/:id',productsApiController.getProducts);
productsApiRouter.post('/',productsApiController.createProduct);
productsApiRouter.delete('/:id', productsApiController.deleteProduct)

module.exports = productsApiRouter;
 