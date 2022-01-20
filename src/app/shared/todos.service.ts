import { Injectable } from "@angular/core";


export interface Todo {
    id: number,
    title: string,
    completed: boolean,
    date: any
}

@Injectable({providedIn: 'root'})
export class TodosService {

    todos: Todo[] = this.getTodos();
    
    public getTodos(): Todo[] {
        let localStorageItem = JSON.parse(localStorage.getItem('todos') || '');
        return localStorageItem == null ? [] : localStorageItem.todos; 
    }

    public onToggle(id: number): void {
        const idx = this.todos.findIndex(t => t.id === id);
        this.todos[idx].completed = !this.todos[idx].completed; 
    }

    public removeTodo(id: number): void {
        let todos = this.getTodos();
        todos = todos.filter(t => t.id != id);
        console.log(todos)
        this.todos = todos;
        this.setLocalStorageTodos(todos);
    }

    public copyTodo(id: number): void {
        let todos = this.getTodos();
        let todo = todos.find(item => item.id == id);
        if (todo !== undefined) {
            todo.id = Date.now();
            todo.date = new Date();
            this.addTodo(todo);
        }
    }

    public addTodo(todo: Todo): void {
        let todos = this.getTodos();
        if (todo !== undefined) {
            if (todo.title !== '') {
                todos.push(todo);
            }
        }
        this.todos = todos;   
        this.setLocalStorageTodos(todos);    
    }   

    private setLocalStorageTodos(todos: Todo[]): void {
        localStorage.setItem('todos', JSON.stringify({todos: todos}))
    }

    public sortDate(array: any) {
        function sortFunction(a: any,b: any){  
          var dateA = new Date(a.date).getTime();
          var dateB = new Date(b.date).getTime();
          return dateA > dateB ? 1 : -1;  
        };
        array.sort(sortFunction);
    }
    
    public sortName(array: any) {
        function SortArray(x: any, y: any){
          if (x.title < y.title) {return -1;}
          if (x.title > y.title) {return 1;}
          return 0;
        }
        array.sort(SortArray);
    }

    public upSwap(id: number) {
        let todosArray = this.todos;
        let index = todosArray.findIndex(item => item.id == id);
        if (index - 1 !== -1) {
            console.log(index);
            [todosArray[index], todosArray[index - 1]] = [todosArray[index - 1], todosArray[index]] 
        }
        this.todos = todosArray;   
        this.setLocalStorageTodos(todosArray); 
    }
    
    public downSwap(id: number) {
        let todosArray = this.todos;
        let index = todosArray.findIndex(item => item.id == id);
        if (index + 1 !== todosArray.length) {
            console.log(index);
            [todosArray[index], todosArray[index + 1]] = [todosArray[index + 1], todosArray[index]] 
        }
        this.todos = todosArray;   
        this.setLocalStorageTodos(todosArray); 
    }
}