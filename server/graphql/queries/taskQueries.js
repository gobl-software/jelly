const { GraphQLList } = require("graphql");
const { TaskType, TaskInputType } = require("../types");
const { allTasks } = require("../resolvers");

module.exports = {
  tasks: {
    type: new GraphQLList(TaskType),
    args: TaskInputType.getFields(),
    resolve: (_, args) => {
      return allTasks(args);
    }
  }
};
