"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const TaskFacade_1 = require("../facades/TaskFacade");
const taskFacade = new TaskFacade_1.TaskFacade();
class TaskController {
    createTask(req, res) {
        const { title, description } = req.body;
        if (!title || !description) {
            res.status(400).json({ message: 'Title and description are required.' });
            return;
        }
        const task = taskFacade.createTask({ title, description });
        res.status(201).json(task);
    }
    getAllTasks(req, res) {
        const tasks = taskFacade.getAllTasks();
        res.status(200).json(tasks);
    }
    getTaskById(req, res) {
        const { id } = req.params;
        const task = taskFacade.getTaskById(id);
        if (task) {
            res.status(200).json(task);
        }
        else {
            res.status(404).json({ message: 'Task not found.' });
        }
    }
    updateTask(req, res) {
        const { id } = req.params;
        const updates = req.body;
        const updatedTask = taskFacade.updateTask(id, updates);
        if (updatedTask) {
            res.status(200).json(updatedTask);
        }
        else {
            res.status(404).json({ message: 'Task not found.' });
        }
    }
    deleteTask(req, res) {
        const { id } = req.params;
        const success = taskFacade.deleteTask(id);
        if (success) {
            res.status(200).json({ message: 'Task deleted successfully.' });
        }
        else {
            res.status(404).json({ message: 'Task not found.' });
        }
    }
}
exports.TaskController = TaskController;
