import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
/**
 * Todo entity.
 */
export class Todo {

    /**
     * Key.
     */
    todoId: string;

    /**
     * Values.
     */
    description: string;
    test: string;
}

/**
 * Entity class. Defines each entity and its methods.
 */
@Injectable() export class Entity {

    /**
     * Todos entity.
     */
    todos: Array<Todo> = [];

    /**
     * Adds a todo.
     * 
     * @param record
     */
    addTodo(record: Todo) {
        this.todos.push(record);
    }

    /**
     * Deletes a todo.
     * 
     * @param record
     */
    deleteTodo(record: Todo) {
        var index: number = this.todos.indexOf(record);
        this.todos.splice(index, 1);
    }

    /**
     * Edits a todo.
     * 
     * @param record
     */
    editTodo(record: Todo) {
        var index: number = this.todos.indexOf(record);
        this.todos[index].todoId = record.todoId;
        this.todos[index].description = record.description;
        this.todos[index].test = record.test;
    }

    /**
     * Clears the todos entity.
     */
    clearTodos() {
        this.todos.splice(0);
    }

    /**
     * Creates key.
     * 
     * @return A new key
     */
    createKey(): string {
        // Generates and returns a RFC4122 v4 UUID.
        return uuid();
    }

    /**
     * Sorts todos by description.
     */
    sortTodos() {
        this.todos = this.todos.sort((record1, record2) => {
            if (record1.description > record2.description) {
                return 1;
            }
            if (record1.description < record2.description) {
                return -1;
            }
            return 0;
        });
    }
}