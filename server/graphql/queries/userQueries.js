const { GraphQLList } = require("graphql");
const {
  UserType,
  UserInputType,
  LoginInputType,
  VerifyTokenType
} = require("../types");
const { allUsers, loginUser, verifyToken } = require("../resolvers");

module.exports = {
  users: {
    type: new GraphQLList(UserType),
    args: UserInputType.getFields(),
    resolve: (_, args) => {
      return allUsers(args);
    }
  },
  loginUser: {
    type: UserType,
    args: LoginInputType.getFields(),
    resolve: (_, args) => {
      return loginUser(args);
    }
  },
  verifyToken: {
    type: UserType,
    args: VerifyTokenType.getFields(),
    resolve: (_, args) => {
      return verifyToken(args);
    }
  }
};
