import { KanbanComponent } from './components/kanban/kanban.component';
import { SummaryComponent } from './components/summary/summary.component';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
export const routes: Routes = [
    {
        path: '',
        component: KanbanComponent
    },
    {
        path: 'summary',
        component: SummaryComponent
    }
];
