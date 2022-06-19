//ng generate module orders --route orders --module app.module
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ 

  
  {
    path: 'universities',
    loadChildren: () => import('./universities/universities.module').then(m => m.UniversitiesModule)
  },
  {
    path: 'students',
    loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  { path: 'orders', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) }
]

@NgModule({ 

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }
