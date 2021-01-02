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
      if(this.formGroup.valid)
      this.service.eLogin(this.formGroup.value).subscribe((res:any)=>{
        localStorage.setItem('email', res.email)
        localStorage.setItem('access_token', res.token)
        localStorage.setItem('id', res.id)
        localStorage.setItem('ref', 'Employee')
        
        this.formGroup.reset()
      
       
      this.router.navigate(['/']) 
        //window.location.reload();
       
  
      })
    }
  
  
}
