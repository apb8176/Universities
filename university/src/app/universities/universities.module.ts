import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversitiesRoutingModule } from './universities.routing-module';
import { LoginComponent } from '../login/login.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HomeComponent } from '../home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from '../dashboard/dashboard.component';



@NgModule({
  declarations: [ LoginComponent,
    HomeComponent,
    DashboardComponent],
  imports: [
    CommonModule,
    UniversitiesRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class UniversitiesModule { }
