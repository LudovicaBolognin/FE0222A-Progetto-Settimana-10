import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interface/todo';
import * as TodoService from 'src/app/service/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {

  messaggio: string = "Stiamo elaborando i Task...";
  todos: Todo[] = [];
  completati: Todo[] = [];
  newTodo: string;

  constructor() {

    // caricare i dati (dal service)
  if(!this.todos.length || this.todos === []) {
    this.noTasks();
  }
    this.inizio();
   }

   // trascivere gli input nella lista-tabella
saveTodo() {
  if(this.newTodo){
    TodoService.add(this.newTodo).then((ele) => {
      console.log(ele);
      this.newTodo = '';
    });
  } else {
alert("Non hai inserito alcun Task!")
  }
}


// rimuovere dalla lista e passarli a task completati
removeTodo(ele: Todo, id: number) {
  TodoService.update(ele, id).then(() => {
    this.todos = this.todos.filter((ele, i) => i!==id);
    //controlli
    console.log(ele);
    console.log(this.todos);
    this.completati.push(ele);
    console.log(this.completati);
  });
  if(!this.todos.length || this.todos === []) {
    this.noTasks();
  }
};


  ngOnInit(): void {

  }


  noTasks(){
    let p = new Promise((succ,err) =>
    {setTimeout(()=>{succ(this.messaggio= "Non ci sono Task")},2000)})
    return p
  }

  inizio(){
    TodoService.get().then((ele) => {
      this.todos = ele;
    });
  }

}
