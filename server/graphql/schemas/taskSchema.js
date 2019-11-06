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
  assignedBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  assignedTo: [{ type: Schema.Types.ObjectId, ref: "User" }],
  requirements: {
    type: [{ type: Schema.Types.ObjectId, ref: "Task" }]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const task = mongoose.model("Task", taskSchema);

module.exports = task;
