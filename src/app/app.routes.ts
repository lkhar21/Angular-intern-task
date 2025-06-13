import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users';
import { PostsComponent } from './components/posts/posts';
import { TodosComponent } from './components/todos/todos';

export const routes: Routes = [
  { path: '', component: UsersComponent },            
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'todos/:id', component: TodosComponent },   
];
