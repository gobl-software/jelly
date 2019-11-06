const { UserType, UserInputType } = require("../types");
const { createUser } = require("../resolvers");

module.exports = {
  createUser: {
    type: UserType,
    args: UserInputType.getFields(),
    resolve: (_, args) => {
      return createUser(args);
    }
  }
};
