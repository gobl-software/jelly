const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  progress: {
    type: String,
    required: true
  },
  requirements: {
    type: [{ type: Schema.Types.ObjectId, ref: "Task" }]
  },
  assignedBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  assignedTo: [{ type: Schema.Types.ObjectId, ref: "User" }]
});

const task = mongoose.model("Task", taskSchema);

module.exports = task;
