const { GraphQLList } = require("graphql");
const { UserType, UserInputType } = require("../types");
const { allUsers } = require("../resolvers");

module.exports = {
  users: {
    type: new GraphQLList(UserType),
    args: UserInputType.getFields(),
    resolve: (_, args) => {
      return allUsers(args);
    }
  }
};
