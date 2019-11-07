const { GraphQLList } = require("graphql");
const { ProjectType, ProjectInputType } = require("../types");
const { allProjects } = require("../resolvers");

module.exports = {
  projects: {
    type: new GraphQLList(ProjectType),
    args: ProjectInputType.getFields(),
    resolve: (_, args) => {
      return allProjects(args);
    }
  }
};
