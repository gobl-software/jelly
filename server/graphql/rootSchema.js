const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const { TaskType, TaskInputType } = require("./types");
const rootQueries = require("./queries");
const { Task } = require("./schemas");

const rootQuery = new GraphQLObjectType({
  name: "rootQuery",
  fields: rootQueries
});

const rootMutation = new GraphQLObjectType({
  name: "rootMutation",
  fields: {
    createTask: {
      type: TaskType,
      args: TaskInputType.getFields(),
      resolve: (_, args) => {
        const { title, description, progress } = args;
        return new Task({
          title,
          description,
          progress
        }).save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation
});
