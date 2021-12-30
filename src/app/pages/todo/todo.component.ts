import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/shared/services/todo.service';
import { Task } from "../../shared/models/task.model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  tasks: Task[] = [];

  newTask = "";

  constructor(private todoService: TodoService) {

  }

  ngOnInit(): void {
    this.tasks = this.todoService.getTasks()
  }

  addNewTask() {
    if(this.newTask){
      this.todoService.addNewTask({
        title: this.newTask,
        isCompleted: false,
      })
    }    

    this.newTask = "";
  }

  updateTask(index: number) {
    this.todoService.updateTask(index)
  }

  removeTask(index: number) {
    this.tasks = this.todoService.removeTask(index)
  }

}
