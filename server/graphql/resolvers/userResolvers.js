const { User } = require("../schemas");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const { GraphQLError } = require("graphql");
const bcrypt = require("bcryptjs");

const allUsers = args => {
  return User.find(args ? args : null);
};

const createUser = async args => {
  const { email } = args;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new GraphQLError(`An account with email ${email} already exists.`);
  }

  if (args.password != args.confirm) {
    return new GraphQLError(`Passwords do not match.`);
  }

  let user = await new User(args).save();
  const token = jwt.sign({ id: user._id }, "secret");

  return { token, password: null, ...user._doc };
};

const loginUser = async args => {
  const { username, password } = args;
  const user = await User.findOne({ username });

  if (!user) {
    return new GraphQLError(`No account found with username ${args.username}`);
  }

  const isMatch = bcrypt.compareSync(password, user.password);

  if (isMatch) {
    const token = jwt.sign({ user_id: user._id }, "secret");
    return { token, password: null, ...user._doc };
  } else {
    return new GraphQLError(`Username and Password combination invalid.`);
  }
};

const verifyToken = async args => {
  try {
    const decoded = jwt.verify(args.token, "secret");
    const user = await User.findOne({ _id: decoded.user_id });
    return { ...user._doc, password: null };
  } catch (err) {
    return new GraphQLError(err);
  }
};

module.exports = {
  allUsers,
  createUser,
  loginUser,
  verifyToken
};
