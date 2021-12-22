const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const connectMongo = require('./dbconfig/mongo.js');
// graphql
const root = require('./graphql/resolvers/root_resolver');
const { graphqlHTTP } = require('express-graphql');
const graphqlSchema = require('./graphql/schemas/new_nba_graphql_schema');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('combined'));

app.use(
    '/graphql',
    graphqlHTTP({
        schema: graphqlSchema,
        rootValue: root,
        graphiql: true
    })
);

const SERVER_PORT = process.env.SERVER_PORT || 4000;

const startApp = async () => {
    await connectMongo();
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Application started on port: ${SERVER_PORT}`);
    });
};

startApp();
