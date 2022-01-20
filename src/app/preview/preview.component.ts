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

  onChange(id: number): void { 
    this.todosService.onToggle(id)
  }

  sortDate(array: any): void {
    this.todosService.sortDate(array);
  }

  sortName(array: any): void {
    this.todosService.sortName(array);
  }

  upSwap(id: number): void {
    this.todosService.upSwap(id);
  }

  downSwap(id: number): void {
    this.todosService.downSwap(id);
  }
}
