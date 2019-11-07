const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = require("graphql");

module.exports = {
  ProjectType: new GraphQLObjectType({
    name: "ProjectType",
    fields: {
      title: { type: GraphQLString },
      description: { type: GraphQLString },
      tasks: { type: new GraphQLList(GraphQLID) },
      members: { type: new GraphQLList(GraphQLID) },
      createdBy: { type: GraphQLID },
      createdAt: { type: GraphQLString }
    }
  }),

  ProjectInputType: new GraphQLInputObjectType({
    name: "ProjectInputType",
    fields: {
      title: { type: GraphQLString },
      description: { type: GraphQLString },
      members: { type: new GraphQLList(GraphQLID) },
      createdBy: { type: GraphQLID },
      createdAt: { type: GraphQLString }
    }
  })
};
