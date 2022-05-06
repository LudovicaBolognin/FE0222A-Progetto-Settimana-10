import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interface/todo';
import * as TodoServizi from 'src/app/service/todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {
  tasks!: Todo[];

  constructor() {
      TodoServizi.getCompletati().then((ele) => {
        this.tasks = ele;
      });

   }

  ngOnInit(): void {
  }
}
