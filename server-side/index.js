const express = require('express')
const cors = require('cors')
const db = require('./db')
const pizzas = require('./pizzaModel')





require('dotenv').config()
const port = process.env.PORT || 5000;




const app = express()
app.use(cors())
app.use(express.json())

const pizzasRoute = require('./routes/pizzzaRoutes.js')
const userRoute = require('./routes/userRoutes.js')
const ordersRoute = require('./routes/orderRoots.js')


app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/', ordersRoute)

app.get('/', (req, res) => {
    res.send("opening pizza burg database")
})
app.listen(port, () => {
    console.log('Pizza Burg app is running')
})