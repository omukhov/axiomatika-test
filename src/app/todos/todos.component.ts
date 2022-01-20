import { Component, OnInit } from '@angular/core';
import { TodosService } from '../shared/todos.service';
import { Todo } from '../shared/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(public todosService: TodosService) {
  }

  ngOnInit(): void {
  }

  onChange(id: number): void { 
    this.todosService.onToggle(id)
  }

  removeTodo(id: number): void {
    this.todosService.removeTodo(id)
  }

  getTodos(): Todo[] {
    return this.todosService.getTodos();
  }

  copyTodo(id: number): void {
    this.todosService.copyTodo(id);
  }
  
  sortDate(array: any): void {
    this.todosService.sortDate(array);
  }

  sortName(array: any): void {
    this.todosService.sortName(array);
  }
}

