const express = require('express')
const cowsay = require('cowsay')
require('./utils/db_mongo'); // conectarse a la BBDD Mongo
const error404 = require('./middlewares/error404')
const app = express()
const port = 3000

// Módulos de Rutas
const productsApiRoutes = require('./routes/productsApiRoutes')
const providersApiRoutes = require('./routes/providersApiRoutes')

// Middlewares
app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`Hello World!,  `)
   
})

//Rutas 
app.use('/api/products',productsApiRoutes); // Rutas web products
app.use('/api/providers',providersApiRoutes); // Rutas providers


app.use(error404); // Middleware Para ruta no encontrada (404)

app.listen(port, () => {
    console.log(
        cowsay.say({
            text: `Nos vamos a por tortilla (si queda) Example app listening on port http://localhost:${port}`,
            e: "oO",
            T: "U "
        }))
})