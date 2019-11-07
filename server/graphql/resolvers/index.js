const _ = require("lodash");
const taskResolvers = require("./taskResolvers");
const userResolvers = require("./userResolvers");
const projectResolvers = require("./projectResolvers");

module.exports = _.merge(taskResolvers, userResolvers, projectResolvers);
