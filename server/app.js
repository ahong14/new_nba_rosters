const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const connectMongo = require('./dbconfig/mongo.js');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('combined'));

const playerRoutes = require('./routes/playerRoutes');
const teamRoutes = require('./routes/teamRoutes');
app.use('/api/players', playerRoutes);
app.use('/api/teams', teamRoutes);

const SERVER_PORT = process.env.SERVER_PORT || 4000;

const startApp = async () => {
    await connectMongo();
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Application started on port: ${SERVER_PORT}`);
    });
};

startApp();
