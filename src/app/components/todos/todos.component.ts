import { Component, OnInit } from "@angular/core";
import { TodoService } from "src/app/service/todo.service";

import { Todo } from "./../../model/Todo";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
})
export class TodosComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  todos!: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  /**
   * Function to set status of todo
   */
  changeTodoStatus(todo: Todo): void {
    this.todoService.changeStatus(todo);
  }

  /**
   * Function to delete todo
   */
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
