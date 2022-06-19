import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { StudentsModule } from './students/students.module';
import { UniversitiesModule } from './universities/universities.module';
import { UniversitiesRoutingModule } from './universities/universities.routing-module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    MatToolbarModule,
    StudentsModule,
    UniversitiesModule,
    UniversitiesRoutingModule,
    StudentsModule,    
    MatButtonModule,      
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
