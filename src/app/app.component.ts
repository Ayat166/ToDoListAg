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
    .subscribe((result: Task[]) => {
      let list : Task[] =[];
      for (let minitask of result ){
        minitask.dueDate = minitask.dueDate.toString().split('T')[0];
        list.push(minitask)
      }
      this.tasks = list;
      
    });
  }
  updateTaskList(tasks:Task[]){
    let list : Task[] =[];
      for (let minitask of tasks ){
        minitask.dueDate = minitask.dueDate.toString().split('T')[0];
        list.push(minitask)
      }
    this.tasks = list;
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
    .subscribe((result: Task[]) => {
      let list : Task[] =[];
      for (let minitask of result ){
        minitask.dueDate = minitask.dueDate.toString().split('T')[0];
        list.push(minitask)
      }
      this.tasks = list;
      
    });
  }
  Completed(task:Task){
    this.toDoService
    .completeTask(task)
    .subscribe((result: Task[]) => {
      let list : Task[] =[];
      for (let minitask of result ){
        minitask.dueDate = minitask.dueDate.toString().split('T')[0];
        list.push(minitask)
      }
      this.tasks = list;
      
    });
  }
}
