"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskFacade = void 0;
const TaskService_1 = require("../services/TaskService");
const TaskFactory_1 = require("../factories/TaskFactory");
class TaskFacade {
    constructor() {
        this.taskService = new TaskService_1.TaskService();
    }
    createTask({ title, description }) {
        const task = TaskFactory_1.TaskFactory.createTask(title, description);
        return this.taskService.createTask(task);
    }
    getAllTasks() {
        return this.taskService.getAllTasks();
    }
    getTaskById(id) {
        return this.taskService.getTaskById(id);
    }
    updateTask(id, updates) {
        return this.taskService.updateTask(id, updates);
    }
    deleteTask(id) {
        return this.taskService.deleteTask(id);
    }
}
exports.TaskFacade = TaskFacade;
