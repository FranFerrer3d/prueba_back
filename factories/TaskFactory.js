"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskFactory = void 0;
const uuid_1 = require("uuid");
class TaskFactory {
    static createTask(title, description) {
        return {
            id: (0, uuid_1.v4)(),
            title,
            description,
            createdAt: new Date(),
        };
    }
}
exports.TaskFactory = TaskFactory;
