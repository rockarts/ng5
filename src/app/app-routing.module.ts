import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TodoComponent } from './todo/todo.component';
import {ConstructionformComponent} from './constructionform/constructionform.component';
import { MatMenu } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'about/:id',
    component: AboutComponent
  },
  {
    path: 'construction',
    component: ConstructionformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
