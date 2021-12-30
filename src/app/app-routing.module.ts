import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { UsersComponent } from './pages/users/users.component';
import { TodoComponent } from './pages/todo/todo.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "about",
    pathMatch: "full"
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "users",
    component: UsersComponent,
  },
  {
    path: "organaizer",
    component: TodoComponent,
  },
  {
    path: "**",
    redirectTo: "about",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
