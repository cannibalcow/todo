import { AddTask } from '../../store/task/task.action';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as reducers from '../../store/reducers';
import { Column, Task } from '../../store/task/task';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  createCardForm: FormGroup;
  num = 0;
  constructor(private store: Store<reducers.State>) { }

  ngOnInit() {
    this.createCardForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      estimate: new FormControl()
    });
  }

  create() {
    const task = new Task();
    task.column = Column.BACKLOG;
    task.description = this.createCardForm.get('description').value;
    task.title = this.createCardForm.get('title').value;
    task.estimate = this.createCardForm.get('estimate').value;
    task.id = this.nextNumber();

    this.store.dispatch(new AddTask(task));
    this.createCardForm.reset();
  }
  nextNumber(): number {
    this.num++;
    return this.num;
  }
}
