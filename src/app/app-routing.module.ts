import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';

const routes: Routes = [
  {
    path:'list-movies',
    component:ListMoviesComponent
  },
  {
    path:'add-moives',
    component:AddMoviesComponent
  },
  {
    path:'',
    redirectTo:'/list-movies',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
