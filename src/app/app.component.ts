import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList = [{title: 'პური', status: 1}];

  onAdd(title) {
    this.todoList.push({title: title, status: 1});
  }

}

