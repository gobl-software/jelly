const _ = require("lodash");
const taskTypes = require("./taskTypes");
const userTypes = require("./userTypes");

module.exports = _.merge(taskTypes, userTypes);
