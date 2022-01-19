import { Component, OnInit } from '@angular/core';
import { TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
  }

  onChange(id: number) { 
    this.todosService.onToggle(id)
  }

  sortDate(array: any) {
    this.todosService.sortDate(array);
  }

  sortName(array: any) {
    this.todosService.sortName(array);
  }

  upSwap(id: number) {
    this.todosService.upSwap(id);
  }

  downSwap(id: number) {
    this.todosService.downSwap(id);
  }
}
