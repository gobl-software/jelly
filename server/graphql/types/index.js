const _ = require("lodash");
const taskTypes = require("./taskTypes");
const userTypes = require("./userTypes");
const projectTypes = require("./projectTypes");

module.exports = _.merge(taskTypes, userTypes, projectTypes);
