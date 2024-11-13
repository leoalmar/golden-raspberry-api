const { graphqlHTTP } = require('express-graphql');
const schema = require('../schema');

function setupGraphQL(app) {
    app.use(
        '/graphql',
        graphqlHTTP({
            schema,
            graphiql: true,
        })
    );
}

module.exports = setupGraphQL;
