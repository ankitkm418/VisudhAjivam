import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MyService } from 'src/app/myService.service';



@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private service : MyService, private formBuilder: FormBuilder,private router : Router){
  }
  createForm() {
    this.formGroup = this.formBuilder.group({
      "email" : ['', Validators.required],
      "password" : ['', Validators.required],
    });
  }
  
    ngOnInit(): void {
      this.createForm()
    }
  
    login(){
      this.service.eLogin(this.formGroup.value)
      this.formGroup.reset()
      this.router.navigate(['/'])
    }
  
  
}
