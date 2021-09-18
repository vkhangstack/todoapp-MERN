const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const taskSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: false,
  },
});
module.exports = mongoose.model("task", taskSchema);
