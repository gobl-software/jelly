const { Project } = require("../schemas");

module.exports = {
  allProjects: args => {
    return Project.find(args ? args : null);
  },
  createProject: args => {
    return new Project(args).save();
  }
};
