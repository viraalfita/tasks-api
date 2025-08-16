const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  time: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, default: "pending" },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
