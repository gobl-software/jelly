const User = require("./userSchema");

module.exports = {
  createUser: args => {
    const { username, password, email } = args;
    return User.find({ email }).then(result => {
      if (result) {
        return;
      } else {
        new User({
          username,
          password,
          email
        }).save(user => {
          return { ...user._doc };
        });
      }
    });
  }
};
