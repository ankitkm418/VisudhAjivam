import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MyService } from 'src/app/myService.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
 


constructor(public service : MyService, private formBuilder: FormBuilder,private router : Router){
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

  login(formGroup){
  if(this.formGroup.valid)
    this.service.loginForm(this.formGroup.value).subscribe((res:any)=>{
      localStorage.setItem('email', res.email)
      localStorage.setItem('access_token', res.token)
      localStorage.setItem('id', res.id)
      localStorage.setItem('ref', 'Consumer')
      
      this.formGroup.reset()
    
     
    this.router.navigate(['/']) 
      //window.location.reload();
     

    })
 
   
  }


}
