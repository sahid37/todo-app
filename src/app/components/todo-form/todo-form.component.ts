import { Component, OnInit } from "@angular/core";
import { Todo } from "./../../model/Todo";

import { v4 as uuidv4 } from "uuid";
import { TodoService } from "./../../service/todo.service";

@Component({
  selector: "app-todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.css"],
})
export class TodoFormComponent {
  todoTitle: string = "";

  constructor(private todoService: TodoService) {}

  handleAdd(): void {
    if (!this.todoTitle.trim()) {
      const newTodo: Todo = {
        id: uuidv4(),
        title: this.todoTitle,
        isCompleted: false,
        date: new Date(),
      };
      this.todoService.addTodo(newTodo);
      this.todoTitle = "";
    } else {
      console.error('Empty todo entry!');
    }
  }
}