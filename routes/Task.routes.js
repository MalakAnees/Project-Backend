const express = require("express");

const upload = require("../middleware/upload");

const {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
} = require("../controllers/task.controller");

const router = express.Router();


router
    .route("/")
    .post(upload.single("image"), createTask)
    .get(getAllTasks);


router
    .route("/:id")
    .get(getTaskById)
    .patch(upload.single("image"), updateTask)
    .delete(deleteTask);


module.exports = router;