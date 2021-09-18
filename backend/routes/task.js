const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");

/**begin add new task */
router.post("/", async (req, res) => {
  try {
    const task = await new Task({
      task: req.body.task,
      createdAt: Date.now(),
    }).save();
    res.status(200).send(task);
  } catch (error) {
    res.send(error);
  }
});
/**end add new task*/
/**begin get all tasks */
router.get("/", async (_req, res) => {
  try {
    const task = await Task.find();
    task.sort((a, b) => b.createdAt - a.createdAt);
    res.status(200).send(task);
  } catch (error) {
    res.send(error);
  }
});
/**end get all tasks*/
/**begin update task */
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        task: req.body.task,
        completed: req.body.completed,
        updatedAt: Date.now(),
      }
    );
    res.status(200).send(task);
  } catch (error) {
    res.send(error);
  }
});
/**end update task*/
/**begin delete task */
router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send(task);
  } catch (error) {
    res.send(error);
  }
});
/**end delete task*/
module.exports = router;
