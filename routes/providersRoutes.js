const express = require('express')
const providersController = require("../controllers/providersController");
const providersRouter = express.Router();

// /products
// GET http://localhost:3000/products/3
// GET http://localhost:3000/products/4
// GET http://localhost:3000/products
// /products
providersRouter.get('/:id?',providersController.getProviders);

module.exports = providersRouter;
