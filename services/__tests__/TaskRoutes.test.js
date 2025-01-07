"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const TaskRoutes_1 = __importDefault(require("../../routes/TaskRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/tasks', TaskRoutes_1.default);
describe('Task Routes', () => {
    it('should create a task', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app)
            .post('/tasks')
            .send({ title: 'Test Task', description: 'This is a test task' });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.title).toBe('Test Task');
    }));
    it('should return all tasks', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app).post('/tasks').send({ title: 'Task 1', description: 'Description 1' });
        yield (0, supertest_1.default)(app).post('/tasks').send({ title: 'Task 2', description: 'Description 2' });
        const response = yield (0, supertest_1.default)(app).get('/tasks');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(2);
    }));
    it('should get a task by ID', () => __awaiter(void 0, void 0, void 0, function* () {
        const taskResponse = yield (0, supertest_1.default)(app)
            .post('/tasks')
            .send({ title: 'Test Task', description: 'This is a test task' });
        const response = yield (0, supertest_1.default)(app).get(`/tasks/${taskResponse.body.id}`);
        expect(response.status).toBe(200);
        expect(response.body.title).toBe('Test Task');
    }));
    it('should return 404 for non-existing task', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get('/tasks/999');
        expect(response.status).toBe(404);
    }));
    it('should update a task', () => __awaiter(void 0, void 0, void 0, function* () {
        const taskResponse = yield (0, supertest_1.default)(app)
            .post('/tasks')
            .send({ title: 'Task to Update', description: 'Old Description' });
        const response = yield (0, supertest_1.default)(app)
            .put(`/tasks/${taskResponse.body.id}`)
            .send({ title: 'Updated Task', description: 'New Description' });
        expect(response.status).toBe(200);
        expect(response.body.title).toBe('Updated Task');
    }));
    it('should delete a task', () => __awaiter(void 0, void 0, void 0, function* () {
        const taskResponse = yield (0, supertest_1.default)(app)
            .post('/tasks')
            .send({ title: 'Task to Delete', description: 'Will be deleted' });
        const response = yield (0, supertest_1.default)(app).delete(`/tasks/${taskResponse.body.id}`);
        expect(response.status).toBe(200);
    }));
});
