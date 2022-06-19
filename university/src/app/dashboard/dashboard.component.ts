import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../services/api-http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public countryData: any = [{}];
  constructor(
    private apiService : ApiHttpService
  ) { 
    
    
  }

  ngOnInit(): void {
    this.apiService.get("https://gorest.co.in/public/v2/users").subscribe( object => {     
       this.countryData = object
    })
  }

}
