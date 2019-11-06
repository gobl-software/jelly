const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");

const User = new GraphQLObjectType({
  name: User,
  fields: {
    _id: { type: GraphQLID },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString }
  }
});

module.exports = User;
