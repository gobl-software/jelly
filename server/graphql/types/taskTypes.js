const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString
} = require("graphql");

module.exports = {
  TaskType: new GraphQLObjectType({
    name: "Task",
    fields: {
      title: { type: GraphQLString },
      description: { type: GraphQLString },
      progress: { type: GraphQLString }
    }
  }),

  TaskInputType: new GraphQLInputObjectType({
    name: "TaskInput",
    fields: {
      title: { type: GraphQLString },
      description: { type: GraphQLString },
      progress: { type: GraphQLString }
    }
  })
};
