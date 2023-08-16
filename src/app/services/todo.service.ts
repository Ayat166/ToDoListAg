import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = "tasks";
  private url2 ="completeTask";
  constructor(private http:HttpClient) { }

  public getToDoList() : Observable<Task[]>{
    
    return this.http.get<Task[]>(`${environment.apiUrl}/${this.url}`);

  }
  public updateToDoList(task:Task) : Observable<Task[]>{
    
    return this.http.put<Task[]>(`${environment.apiUrl}/${this.url}`,task);

  }
  public createToDoList(task:Task) : Observable<Task[]>{
    
    return this.http.post<Task[]>(`${environment.apiUrl}/${this.url}`,task);

  }
  public deleteToDoList(task:Task) : Observable<Task[]>{
    
    return this.http.delete<Task[]>(`${environment.apiUrl}/${this.url}/${task.id}`);

  }
  public completeTask(task:Task) : Observable<Task[]>{
    
    return this.http.put<Task[]>(`${environment.apiUrl}/${this.url2}/${task.id}`,task);

  }
}
