const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const setupGraphQL = require('./graphql/graphqlServer');
const loadData = require('./utils/loadData');
const routes = require('./routes');

loadData();

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Golden Raspberry Awards API',
            version: '1.0.0',
            description: 'API para consultar produtores e filmes vencedores do Golden Raspberry Awards',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./src/routes/*.js'],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
const app = express();

setupGraphQL(app);

app.use(express.json());
app.use('/api', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = app;
