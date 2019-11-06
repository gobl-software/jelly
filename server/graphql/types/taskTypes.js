const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = require("graphql");

module.exports = {
  TaskType: new GraphQLObjectType({
    name: "TaskType",
    fields: {
      title: { type: GraphQLString },
      description: { type: GraphQLString },
      progress: { type: GraphQLString },
      assignedBy: { type: GraphQLID },
      requirements: { type: GraphQLList(GraphQLID) },
      assignedTo: { type: GraphQLList(GraphQLID) },
      date: { type: GraphQLString }
    }
  }),

  TaskInputType: new GraphQLInputObjectType({
    name: "TaskInputType",
    fields: {
      title: { type: GraphQLString },
      description: { type: GraphQLString },
      progress: { type: GraphQLString },
      assignedBy: { type: GraphQLID },
      requirements: { type: GraphQLList(GraphQLID) },
      assignedTo: { type: GraphQLList(GraphQLID) }
    }
  })
};
