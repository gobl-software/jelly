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
      email: { type: GraphQLString },
      password: { type: GraphQLString },
      token: { type: GraphQLString }
    }
  }),

  UserInputType: new GraphQLInputObjectType({
    name: "UserInputType",
    fields: {
      _id: { type: GraphQLID },
      username: { type: GraphQLString },
      password: { type: GraphQLString },
      confirm: { type: GraphQLString },
      email: { type: GraphQLString }
    }
  }),

  LoginInputType: new GraphQLInputObjectType({
    name: "LoginInputType",
    fields: {
      username: { type: GraphQLString },
      password: { type: GraphQLString }
    }
  }),

  VerifyTokenType: new GraphQLObjectType({
    name: "VerifyTokenType",
    fields: {
      token: { type: GraphQLString }
    }
  })
};
