const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInputObjectType
} = require("graphql");

module.exports = {
  UserType: new GraphQLObjectType({
    name: "UserType",
    fields: {
      _id: { type: GraphQLID },
      username: { type: GraphQLString },
      password: { type: GraphQLString },
      email: { type: GraphQLString }
    }
  }),

  UserInputType: new GraphQLInputObjectType({
    name: "UserInputType",
    fields: {
      _id: { type: GraphQLID },
      username: { type: GraphQLString },
      password: { type: GraphQLString },
      email: { type: GraphQLString }
    }
  })
};
