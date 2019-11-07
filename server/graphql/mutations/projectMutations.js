const { ProjectType, ProjectInputType } = require("../types");
const { createProject } = require("../resolvers");

module.exports = {
  createProject: {
    type: ProjectType,
    args: ProjectInputType.getFields(),
    resolve: (_, args) => {
      return createProject(args);
    }
  }
};
