const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  project: {
    type: { type: Schema.Types.ObjectId, ref: "Project" }
  },
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
    ref: "User",
    required: true
  },
  assignedTo: [{ type: Schema.Types.ObjectId, ref: "User" }],
  requirements: {
    type: [{ type: Schema.Types.ObjectId, ref: "Task" }]
  },
  deadline: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = mongoose.model("Task", taskSchema);
