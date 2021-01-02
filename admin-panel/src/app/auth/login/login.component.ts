import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor( private formBuilder : FormBuilder, private router : Router) { }
  
  createForm() {
    this.formGroup = this.formBuilder.group({
      'email': [''],
      "password" : [''],
    });
  }
  ngOnInit(): void {
    this.createForm()
  }
login(){
  if(this.formGroup.value.email === 'admin@gmail.com' && this.formGroup.value.password === 'admin@123'){
    this.router.navigate(['dashboard'])
  } else {
    alert('Please input your valid usernam and password')
  }
}
}
