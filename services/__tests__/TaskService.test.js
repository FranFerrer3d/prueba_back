"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TaskService_1 = require("../TaskService");
describe('TaskService', () => {
    let taskService;
    beforeEach(() => {
        taskService = new TaskService_1.TaskService();
    });
    it('should create a task', () => {
        const task = {
            id: '1',
            title: 'Test Task',
            description: 'This is a test task',
            createdAt: new Date(),
        };
        const createdTask = taskService.createTask(task);
        expect(createdTask).toEqual(task);
        expect(taskService.getAllTasks()).toHaveLength(1);
    });
    it('should get a task by ID', () => {
        const task = {
            id: '1',
            title: 'Test Task',
            description: 'This is a test task',
            createdAt: new Date(),
        };
        taskService.createTask(task);
        const foundTask = taskService.getTaskById('1');
        expect(foundTask).toEqual(task);
    });
    it('should return undefined for a non-existing task', () => {
        const foundTask = taskService.getTaskById('999');
        expect(foundTask).toBeUndefined();
    });
    it('should update a task', () => {
        const task = {
            id: '1',
            title: 'Test Task',
            description: 'This is a test task',
            createdAt: new Date(),
        };
        taskService.createTask(task);
        const updates = { title: 'Updated Task' };
        const updatedTask = taskService.updateTask('1', updates);
        expect(updatedTask).toMatchObject(Object.assign(Object.assign({}, task), updates));
    });
    it('should delete a task', () => {
        const task = {
            id: '1',
            title: 'Test Task',
            description: 'This is a test task',
            createdAt: new Date(),
        };
        taskService.createTask(task);
        const success = taskService.deleteTask('1');
        expect(success).toBe(true);
        expect(taskService.getAllTasks()).toHaveLength(0);
    });
    it('should return false when deleting a non-existing task', () => {
        const success = taskService.deleteTask('999');
        expect(success).toBe(false);
    });
});
