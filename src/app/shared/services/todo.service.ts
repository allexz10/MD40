import { Injectable } from "@angular/core";
import { Task } from "../models/task.model";


@Injectable({
    providedIn: "root"
})

export class TodoService {
    tasks: Task[] = [];
    newTask?: string;

    getTasks(): Task[] {
        return this.tasks
    }

    addNewTask(task?: Task): void {
        if (task) {
            this.tasks.push(task)
        }
    }

    updateTask(index: number): void {
        this.tasks[index].isCompleted = !this.tasks[index].isCompleted;

    }

    removeTask(index: number): Task[] {
        this.tasks = this.tasks.filter((it, i) => index !== i);
        return this.tasks;
    }


}