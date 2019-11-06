const _ = require("lodash");
const taskResolvers = require("./taskResolvers");
const userResolvers = require("./userResolvers");

module.exports = _.merge(taskResolvers, userResolvers);
