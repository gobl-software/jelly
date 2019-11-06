const { Task } = require("../schemas");

module.exports = {
  allTasks: args => {
    return Task.find(args ? args : null);
  },
  createTask: args => {
    return new Task(args).save();
  }
};
