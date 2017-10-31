import { schema } from './db';
import { DBModule } from '@ngrx/db';
import { metaReducers } from './store/reducers/index';
import { TaskEffect } from './store/task/task.effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reduce } from 'rxjs/operators/reduce';
import { StoreModule } from '@ngrx/store';
import { routes } from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { reducers } from './store/reducers';
import { TaskService } from './provider/task.service';
import { CardComponent } from './components/card/card.component';
import { SummaryComponent } from './components/summary/summary.component';
import { KanbanComponent } from './components/kanban/kanban.component';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SummaryComponent,
    KanbanComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      TaskEffect
    ]),
    DBModule.provideDB(schema)
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
