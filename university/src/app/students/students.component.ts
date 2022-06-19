import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../services/api-http.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  public countryData2: any = [{}];
  constructor(
    private apiService : ApiHttpService
  ) { }

  ngOnInit(): void {
    this.apiService.get("http://universities.hipolabs.com/search?country=United+States").subscribe( object => {     
       this.countryData2 = object;
       
    })
  }

}

