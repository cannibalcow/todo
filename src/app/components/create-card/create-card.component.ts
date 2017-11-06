import { AddTask } from '../../store/task/task.action';
import { Store } from '@ngrx/store';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(private store: Store<reducers.State>, private fb: FormBuilder) {
    this.createCardForm = this.fb.group({
      title: [null, Validators.required],
      description: ['', Validators.required],
      estimate: [1, Validators.required]
    });
  }

  ngOnInit() {


    console.log(this.createCardForm);
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
