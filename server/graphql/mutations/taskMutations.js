const { TaskType, TaskInputType } = require("../types");
const { createTask } = require("../resolvers");

module.exports = {
  createTask: {
    type: TaskType,
    args: TaskInputType.getFields(),
    resolve: (_, args) => {
      return createTask(args);
    }
  }
};
