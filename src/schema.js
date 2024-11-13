const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLSchema } = require('graphql');
const producerResolver = require('./resolvers/producerResolver');
const movieResolver = require('./resolvers/movieResolver');

const ProducerIntervalType = new GraphQLObjectType({
    name: 'ProducerInterval',
    fields: {
        producer: { type: GraphQLString },
        interval: { type: GraphQLInt },
        previousWin: { type: GraphQLInt },
        followingWin: { type: GraphQLInt },
    },
});

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: {
        title: { type: GraphQLString },
        year: { type: GraphQLInt },
        producers: { type: GraphQLString },
    },
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        minProducers: {
            type: new GraphQLList(ProducerIntervalType),
            resolve(parent, args) {
                return producerResolver.getProducerIntervals('min');
            },
        },
        maxProducers: {
            type: new GraphQLList(ProducerIntervalType),
            resolve(parent, args) {
                return producerResolver.getProducerIntervals('max');
            },
        },
        winningMovies: {
            type: new GraphQLList(MovieType),
            resolve(parent, args) {
                return movieResolver.getWinnerMovies(); // Chamando o resolver para filmes
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});
