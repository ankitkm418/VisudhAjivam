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
    this.service.loginForm(this.formGroup.value)
    this.formGroup.reset()
    this.router.navigate(['/'])
  }


}
