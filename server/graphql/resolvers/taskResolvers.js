const { Task } = require("../schemas");

module.exports = {
  allTasks: args => {
    return Task.find(args ? args : null);
  },
  createTask: args => {
    const { title, description, progress } = args;
    return new Task({
      title,
      description,
      progress
    }).save();
  }
};
