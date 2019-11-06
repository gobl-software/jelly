const _ = require("lodash");
const taskMutations = require("./taskMutations");
const userMutations = require("./userMutations");

module.exports = _.merge(taskMutations, userMutations);
