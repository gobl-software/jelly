const _ = require("lodash");
const taskMutations = require("./taskMutations");
const userMutations = require("./userMutations");
const projectMutations = require("./projectMutations");

module.exports = _.merge(taskMutations, userMutations, projectMutations);
