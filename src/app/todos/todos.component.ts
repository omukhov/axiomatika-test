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
    console.log('я тут')
    this.todosService.removeTodo(id)
  }

  getTodos() {
    return this.todosService.getTodos();
  }
  
  sortDate(array: any) {
    function sortFunction(a: any,b: any){  
      var dateA = new Date(a.date).getTime();
      var dateB = new Date(b.date).getTime();
      return dateA > dateB ? 1 : -1;  
    };
    array.sort(sortFunction);
  }

  sortName(array: any) {
    function SortArray(x: any, y: any){
      if (x.title < y.title) {return -1;}
      if (x.title > y.title) {return 1;}
      return 0;
    }
    array.sort(SortArray);
  }
}

