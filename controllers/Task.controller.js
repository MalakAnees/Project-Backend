const Task = require("../models/task.model");

const createTask = async (req, res) => {
    try {
        const taskData = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            priority: req.body.priority,
            dueDate: req.body.dueDate
        };

        if (req.file) {
            taskData.image = `/uploads/${req.file.filename}`;
        }

        const task = await Task.create(taskData);

        res.status(201).json({
            status: "success",
            data: {
                task
            }
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        });
    }
};


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({
            createdAt: -1
        });

        res.status(200).json({
            status: "success",
            count: tasks.length,
            data: {
                tasks
            }
        });

    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};


const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                status: "fail",
                message: "Task not found"
            });
        }

        res.status(200).json({
            status: "success",
            data: {
                task
            }
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Invalid task ID"
        });
    }
};


const updateTask = async (req, res) => {
    try {
        const updateData = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            priority: req.body.priority,
            dueDate: req.body.dueDate
        };

        Object.keys(updateData).forEach((key) => {
            if (updateData[key] === undefined) {
                delete updateData[key];
            }
        });

        if (req.file) {
            updateData.image = `/uploads/${req.file.filename}`;
        }

        const task = await Task.findByIdAndUpdate(
            req.params.id,
            updateData,
            {
                new: true,
                runValidators: true
            }
        );

        if (!task) {
            return res.status(404).json({
                status: "fail",
                message: "Task not found"
            });
        }

        res.status(200).json({
            status: "success",
            data: {
                task
            }
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        });
    }
};


const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({
                status: "fail",
                message: "Task not found"
            });
        }

        res.status(200).json({
            status: "success",
            message: "Task deleted successfully"
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Invalid task ID"
        });
    }
};


module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
};