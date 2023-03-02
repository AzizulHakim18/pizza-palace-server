const mongoose = require('mongoose');
require('dotenv').config()


const mongoUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jjaaohu.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true })

const db = mongoose.connection

db.on('connected', () => {
    console.log('Mongo DB connection succesful');
})

db.on('error', () => {
    console.log('Mongo DB connection failed');
})

module.express = mongoose