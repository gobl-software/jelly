const _ = require("lodash");
const taskQueries = require("./taskQueries");
const userQueries = require("./userQueries");
const projectQueries = require("./projectQueries");

module.exports = _.merge(taskQueries, userQueries, projectQueries);
