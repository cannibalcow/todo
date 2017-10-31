import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as reducers from '../../store/reducers';
import * as fromTask from '../../store/task/task.reducer';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private store: Store<reducers.State>) {
  }

  ngOnInit() {
  }

}
