const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const rootQueries = require("./queries");
const rootMutations = require("./mutations");

const rootQuery = new GraphQLObjectType({
  name: "rootQuery",
  fields: rootQueries
});

const rootMutation = new GraphQLObjectType({
  name: "rootMutation",
  fields: rootMutations
});

module.exports = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation
});
