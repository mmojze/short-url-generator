const express = require('express');
const xss = require('xss-clean');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoSanitize = require('express-mongo-sanitize');
const colors = require('colors');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./config/db');

/* Load enviroment variables */

dotenv.config({ path: './config/config.env' });

/* Connect to database */

connectDB();

/* Get routes */

const version = require('./routes/version');
const generator = require('./routes/generator');
const redirect = require('./routes/redirect');

/* Create app */

const app = express();
app.use(express.json())

/* Use log middleware */

app.use(morgan('dev'));

/* Security middlewares */

app.use(helmet());
app.use(xss()); 
app.use(mongoSanitize());
app.use(hpp());

/* Middleware to limit requests to 1000 every 10 minutes */

const limiter = rateLimit({ 
    windowMs: 10 * 60 * 1000,
    max: 1000
});

app.use(limiter);

/* Enable CORS */

app.use(cors());

/* Set static folder */

app.use(express.static(path.join(__dirname, 'public')));

/*  Mount routes */

app.use('/version', version);
app.use('/generator', generator);
app.use('/', redirect);

/* Server start */

const server = app.listen(process.env.PORT, console.log("Server running on port ".green.inverse + process.env.PORT.green.inverse));

/* Handle unhandled rejections */

process.on('unhandledRejection', (err, promise) => { 
    console.log("Error:" + err.message);
    server.close(() => process.exit(1));
})