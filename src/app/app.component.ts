import { Component } from '@angular/core';
import { Task } from './models/task';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo.UI';
  tasks: Task[] =[];
  taskToEdit?: Task;
  constructor(private toDoService:TodoService){}
  
  ngOnInit(): void{
    this.toDoService
    .getToDoList()
    .subscribe((result: Task[]) => (this.tasks = result));
  }
  updateTaskList(tasks:Task[]){
    this.tasks=tasks;
  }
  initNewTask(){
    this.taskToEdit = new Task();
  }
  editTask(task:Task){
    this.taskToEdit = task;
  }
  deleteTask(task:Task){
    this.toDoService
    .deleteToDoList(task)
    .subscribe((result: Task[]) => (this.tasks = result));
  }
  Completed(task:Task){
    this.toDoService
    .completeTask(task)
    .subscribe((result: Task[]) => (this.tasks = result));
  }
}
