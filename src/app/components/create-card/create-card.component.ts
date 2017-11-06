import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  createCardForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createCardForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      estimate: new FormControl()
    });
  }

}
