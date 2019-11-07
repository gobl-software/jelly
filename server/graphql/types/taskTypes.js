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
      project: { type: GraphQLID },
      title: { type: GraphQLString },
      description: { type: GraphQLString },
      progress: { type: GraphQLString },
      assignedBy: { type: GraphQLID },
      requirements: { type: GraphQLList(GraphQLID) },
      assignedTo: { type: GraphQLList(GraphQLID) },
      deadline: { type: GraphQLString },
      date: { type: GraphQLString }
    }
  }),

  TaskInputType: new GraphQLInputObjectType({
    name: "TaskInputType",
    fields: {
      project: { type: GraphQLID },
      title: { type: GraphQLString },
      description: { type: GraphQLString },
      progress: { type: GraphQLString },
      assignedBy: { type: GraphQLID },
      requirements: { type: GraphQLList(GraphQLID) },
      assignedTo: { type: GraphQLList(GraphQLID) },
      deadline: { type: GraphQLString }
    }
  })
};
