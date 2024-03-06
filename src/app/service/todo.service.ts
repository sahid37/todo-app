import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { Todo } from "./../model/Todo";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  private todosSubject = new BehaviorSubject<Todo[]>([]);
  todos$: Observable<Todo[]> = this.todosSubject.asObservable();

  constructor() {
    this.todosSubject.next([
      {
        id: "01",
        title: "Book Appointment",
        isCompleted: true,
        date: new Date(),
      },
      {
        id: "02",
        title: "Learn Angular",
        isCompleted: true,
        date: new Date(),
      },
      {
        id: "03",
        title: "Get Vaccinated",
        isCompleted: false,
        date: new Date(),
      },
    ]);
  }

  getTodos(): Observable<Todo[]> {
    return this.todos$;
  }

  addTodo(todo: Todo) {
    this.todosSubject.next([...this.todosSubject.getValue(), todo]);
  }

  changeStatus(todo: Todo) {
    this.todosSubject.next(
      this.todosSubject.getValue().map((t) =>
        t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  }

  deleteTodo(todo: Todo) {
    this.todosSubject.next(
      this.todosSubject.getValue().filter((t) => t.id !== todo.id)
    );
  }
}
