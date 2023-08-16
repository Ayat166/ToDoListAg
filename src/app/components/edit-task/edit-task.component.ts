import { Component, Input ,Output , EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {

  @Input() task?: Task;
  @Output() taskUpdated = new EventEmitter<Task[]>();

  constructor(private toDoService:TodoService){}
  ngOnInit(): void{

  }
  updateTask(task:Task){
    this.toDoService
    .updateToDoList(task)
    .subscribe((tasks:Task[])=>this.taskUpdated.emit(tasks));
  }
  
  deleteTask(task:Task){
    this.toDoService
    .deleteToDoList(task)
    .subscribe((tasks:Task[])=>this.taskUpdated.emit(tasks));
  }

  createTask(task:Task){
    this.toDoService
    .createToDoList(task)
    .subscribe((tasks:Task[])=>this.taskUpdated.emit(tasks));
  }

  
}


