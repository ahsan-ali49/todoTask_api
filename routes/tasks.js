const express = require("express");
const router = express.Router();
const {getAllTask, createTask, getSingleTask, deleteTask, updateTask} = require("../controllers/tasks");

router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getSingleTask).delete(deleteTask).patch(updateTask);

module.exports = router;