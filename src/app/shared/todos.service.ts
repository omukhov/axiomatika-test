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
        console.log(todos.filter(t => t.id != id))
        todos = todos.filter(t => t.id != id);
        this.todos = todos;
        this.setLocalStorageTodos(todos);
    }

    public addTodo(todo: Todo): void {
        let todos = this.getTodos();
        if (todo.title !== '') {
            todos.push(todo);
        }
        this.todos = todos;   
        this.setLocalStorageTodos(todos);    
    }   

    private setLocalStorageTodos(todos: Todo[]): void {
        localStorage.setItem('todos', JSON.stringify({todos: todos}))
    }
}