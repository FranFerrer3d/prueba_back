"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerOptions = void 0;
exports.swaggerOptions = {
    openapi: "3.0.0",
    info: {
        title: "API CRUD Backend",
        version: "1.0.0",
        description: "API para gestionar tareas (CRUD)",
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "Servidor local",
        },
    ],
    paths: {
        "/tasks": {
            get: {
                summary: "Obtener todas las tareas",
                responses: {
                    200: {
                        description: "Array de tareas",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/Task",
                                    },
                                },
                            },
                        },
                    },
                },
            },
            post: {
                summary: "Crear una nueva tarea",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/TaskInput",
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Tarea creada",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Task",
                                },
                            },
                        },
                    },
                },
            },
        },
        "/tasks/{id}": {
            get: {
                summary: "Obtener una tarea por ID",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Tarea encontrada",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Task",
                                },
                            },
                        },
                    },
                    404: {
                        description: "Tarea no encontrada",
                    },
                },
            },
            put: {
                summary: "Actualizar una tarea",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/TaskInput",
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Tarea actualizada",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Task",
                                },
                            },
                        },
                    },
                    404: {
                        description: "Tarea no encontrada",
                    },
                },
            },
            delete: {
                summary: "Eliminar una tarea",
                parameters: [
                    {
                        name: "id",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Tarea eliminada",
                    },
                    404: {
                        description: "Tarea no encontrada",
                    },
                },
            },
        },
    },
    components: {
        schemas: {
            Task: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                    },
                    title: {
                        type: "string",
                    },
                    description: {
                        type: "string",
                    },
                    createdAt: {
                        type: "string",
                        format: "date-time",
                    },
                },
            },
            TaskInput: {
                type: "object",
                properties: {
                    title: {
                        type: "string",
                        example: "Título de la tarea",
                    },
                    description: {
                        type: "string",
                        example: "Descripción de la tarea",
                    },
                },
            },
        },
    },
};
