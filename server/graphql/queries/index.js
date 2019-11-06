const _ = require("lodash");
const taskQueries = require("./taskQueries");
const userQueries = require("./userQueries");

module.exports = _.merge(taskQueries, userQueries);
