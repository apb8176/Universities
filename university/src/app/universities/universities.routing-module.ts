import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { HomeComponent } from './../home/home.component';
import { LoginComponent } from './../login/login.component';

const routes: Routes = [ 

 
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: DashboardComponent},
  
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversitiesRoutingModule { }
