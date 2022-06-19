import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,
    ) { }  
  
  username: string;
  password: string;

  ngOnInit(): void {}
  
  onSubmit(){
    if(this.username == 'admin' && this.password == 'admin'){
      this.router.navigate(["universities"]);
     }else {
       alert("Invalid credentials");
     }
    
  }

}
