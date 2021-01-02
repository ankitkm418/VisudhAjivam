import { Router } from '@angular/router';

import { MyService } from 'src/app/myService.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-consumer-signup',
  templateUrl: './consumer-signup.component.html',
  styleUrls: ['./consumer-signup.component.css']
})
export class ConsumerSignupComponent implements OnInit {
  pageTitle: string;
  myData;
  myData1;
  formGroup: FormGroup;
  message: string = 'Our team will get back to you';

  constructor(private service : MyService, 
    private formBuilder: FormBuilder, private snackBar: MatSnackBar, private router : Router) { }

 
  createForm() {
    this.formGroup = this.formBuilder.group({
      'fullName': ['', Validators.required],
      'dob': ['', Validators.required],
      "aadhar" : ['', Validators.required],
      "phone_number" : ['', Validators.required],
      "father" : ['', Validators.required],
      "mother" : ['', Validators.required],
      "marrital" : ['', Validators.required],
      "blood" : ['', Validators.required],
      "family" : ['', Validators.required],
      "profession" : ['', Validators.required],
      "income" : ['', Validators.required],
      "disease" : [''],
      "address" : ['', Validators.required],
      "city" : ['', Validators.required],
      "district" : ['', Validators.required],
      "state" : ['', Validators.required],
      "pin" : ['', Validators.required],
      "country" : ['', Validators.required],
      "email" : ['', Validators.required],
      "password" : ['', Validators.required],
      "password2" : ['', Validators.required],
      // "disease" : ['', Validators.required],
    });
  }

  getError(el) {
    switch (el) {
      case 'fullName':
        if (this.formGroup.get('fullName').hasError('required')) {
          return 'Full name required';
        }
      //   break;
      // case 'email':
      //   if (this.formGroup.get('email').hasError('required')) {
      //     return 'Email required';
      //   }
        break;
        case 'dob':
        if (this.formGroup.get('dob').hasError('required')) {
          return 'DOB required';
        }
        break;
        case 'aadhar':
        if (this.formGroup.get('aadhar').hasError('required')) {
          return 'Aadhar number required';
        }
        break;
        case 'father':
        if (this.formGroup.get('father').hasError('required')) {
          return 'Father/Husband name required';
        }
        break;
        case 'mother':
        if (this.formGroup.get('mother').hasError('required')) {
          return 'Mother name required';
        }
        break;
        case 'marrital':
        if (this.formGroup.get('marrital').hasError('required')) {
          return 'Marrital Status required';
        }
        break;
        case 'blood':
        if (this.formGroup.get('blood').hasError('required')) {
          return 'Blood Group required';
        }
        break;
        case 'family':
        if (this.formGroup.get('family').hasError('required')) {
          return 'Family required';
        }
        break;
        case 'profession':
        if (this.formGroup.get('profession').hasError('required')) {
          return 'Profession required';
        }
        break;
        case 'income':
        if (this.formGroup.get('income').hasError('required')) {
          return 'Income required';
        }
        break;
        case 'address':
        if (this.formGroup.get('address').hasError('required')) {
          return 'Address Group required';
        }
        break;
        case 'city':
        if (this.formGroup.get('city').hasError('required')) {
          return 'City required';
        }
        break;
        case 'district':
        if (this.formGroup.get('district').hasError('required')) {
          return 'District required';
        }
        break;
        case 'state':
        if (this.formGroup.get('state').hasError('required')) {
          return 'State required';
        }
        break;
        case 'pin':
        if (this.formGroup.get('pin').hasError('required')) {
          return 'Pincode required';
        }
        break;
        case 'country':
        if (this.formGroup.get('country').hasError('required')) {
          return 'Country required';
        }
        break;
        case 'email':
        if (this.formGroup.get('email').hasError('required')) {
          return 'Email required';
        }
        break;
        case 'password':
        if (this.formGroup.get('password').hasError('required')) {
          return 'Password required';
        }break;
        case 'confirm_password':
        if (this.formGroup.get('confirm_password').hasError('required')) {
          return 'Confirm Password required';
        }
        // break;
        // case 'phone_number':
        //   if (this.formGroup.get('phone_number').hasError('required')) {
        //     return 'Phone number required';
        //   }
          break;
          case 'comment':
            if (this.formGroup.get('comment').hasError('required')) {
              return 'Comment required';
            }
            break;
      default:
        return '';
    }
  }
  
  ngOnInit(): void {
  this.pageTitle = 'contact us';   
   this.createForm();


  }

  onSubmit(){
    if(this.formGroup.valid)
    this.service.postConsumerForm(this.formGroup.value).subscribe(); 
    alert('Successfully Submitted') 
    this.formGroup.reset()
    this.router.navigate(['/login'])
  }
}
