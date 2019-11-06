const { User } = require("../schemas");

module.exports = {
  allUsers: args => {
    return User.find(args ? args : null);
  },
  createUser: args => {
    const { username, password, email } = args;
    return User.find({ email }).then(result => {
      if (!result[0]) {
        return new User({
          username,
          password,
          email
        }).save();
      }
    });
  }
};
