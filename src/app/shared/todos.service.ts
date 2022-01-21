import { Injectable } from "@angular/core";


export interface Todo {
    id: number,
    title: string,
    completed: boolean,
    date: any
}

@Injectable({providedIn: 'root'})
export class TodosService {

    public todos: Todo[] = this.getTodos();

    public mockTodo: Todo[] = [
        {id: 1, title: 'first', completed: true, date: new Date()},
        {id: 2, title: 'second', completed: false, date: new Date()},
        {id: 3, title: 'third', completed: false, date: new Date()}
    ];

    ngOnInit(): void {
        this.setLocalStorageTodos(this.mockTodo); 
    }
    
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

    public sortDate(array: Todo[]): void {
        function sortFunction(a: Todo,b: Todo){  
          var dateA = new Date(a.date).getTime();
          var dateB = new Date(b.date).getTime();
          return dateA > dateB ? 1 : -1;  
        };
        array.sort(sortFunction);
    }
    
    public sortName(array: Todo[]): void {
        function SortArray(x: Todo, y: Todo){
          if (x.title < y.title) {return -1;}
          if (x.title > y.title) {return 1;}
          return 0;
        }
        array.sort(SortArray);
    }

    public upSwap(id: number): void {
        let todosArray = this.getTodos();
        let index = todosArray.findIndex(item => item.id == id);
        if (index - 1 !== -1) {
            [todosArray[index], todosArray[index - 1]] = [todosArray[index - 1], todosArray[index]] 
        }
        this.todos = todosArray;   
        this.setLocalStorageTodos(todosArray); 
    }
    
    public downSwap(id: number): void {
        let todosArray = this.getTodos();
        let index = todosArray.findIndex(item => item.id == id);
        if (index + 1 !== todosArray.length) {
            [todosArray[index], todosArray[index + 1]] = [todosArray[index + 1], todosArray[index]] 
        }
        this.todos = todosArray;   
        this.setLocalStorageTodos(todosArray); 
    }
}