import { Component, OnInit } from '@angular/core';
import { TodosService } from '../shared/todos.service';

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

  onChange(id: number) { 
    this.todosService.onToggle(id)
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id)
  }

  getTodos() {
    return this.todosService.getTodos();
  }

  copyTodo(id: number) {
    this.todosService.copyTodo(id);
  }
  
  sortDate(array: any) {
    this.todosService.sortDate(array);
  }

  sortName(array: any) {
    this.todosService.sortName(array);
  }
}

