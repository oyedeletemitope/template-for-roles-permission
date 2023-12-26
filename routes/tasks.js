const express = require("express");
const router = express.Router();
const { tasks } = require("../data");

router.get("/", (req, res) => {
  res.json(tasks);
});

router.get("/:taskId", setTask, (req, res) => {
  res.json(req.task);
});

function setTask(req, res, next) {
  const taskId = parseInt(req.params.taskId);
  req.task = tasks.find((task) => task.id === taskId);

  if (req.role == null) {
    res.status(404);
    return res.send("role not found");
  }
  next();
}

module.exports = router;
