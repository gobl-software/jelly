const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const queries = require("./queries");
const mutations = require("./mutations");

const rootQuery = new GraphQLObjectType({
  name: "rootQuery",
  fields: queries
});

const rootMutation = new GraphQLObjectType({
  name: "rootMutation",
  fields: mutations
});

module.exports = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation
});
