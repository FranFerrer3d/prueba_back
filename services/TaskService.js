"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
class TaskService {
    constructor() {
        this.tasks = [];
    }
    createTask(task) {
        this.tasks.push(task);
        return task;
    }
    getAllTasks() {
        return this.tasks;
    }
    getTaskById(id) {
        return this.tasks.find(task => task.id === id);
    }
    updateTask(id, updates) {
        const task = this.getTaskById(id);
        if (task) {
            Object.assign(task, updates);
            return task;
        }
        return undefined;
    }
    deleteTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return true;
        }
        return false;
    }
}
exports.TaskService = TaskService;
