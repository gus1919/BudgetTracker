// dotenv activation
require('dotenv').config();

// dependencies
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const compression = require('compression');

// PORT
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(logger('dev'));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect to mongoose
mongoose.connect(process.env.ATLAS_URI || "mongodb://localhost/budget", {
    useNewUrlParser: true
});
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

// routes
app.use(require(''));

// server creation
app.listen(PORT);
console.log(`Server is listening at http://localhost:${PORT}`);