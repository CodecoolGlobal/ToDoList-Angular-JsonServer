import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksComponent} from './tasks/tasks.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'tasks', component: TasksComponent}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule {
}
