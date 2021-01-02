import { MyService } from 'src/app/myService.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  pageTitle: string;
  myData;
  bannerImage;
  myData1;
  formGroup: FormGroup;
  message: string = 'Our team will get back to you';

  constructor(private service : MyService, 
    private formBuilder: FormBuilder, private snackBar: MatSnackBar) { }

 
  createForm() {
    this.formGroup = this.formBuilder.group({
      'first_name': ['', Validators.required],
      'email': ['', Validators.required],
      "last_name" : ['', Validators.required],
      "phone_number" : ['', Validators.required],
      "comment" : ['', Validators.required],
      "signup_updates" : [''],
    });
  }

  getError(el) {
    switch (el) {
      case 'first_name':
        if (this.formGroup.get('first_name').hasError('required')) {
          return 'First name required';
        }
      //   break;
      // case 'email':
      //   if (this.formGroup.get('email').hasError('required')) {
      //     return 'Email required';
      //   }
        break;
        case 'last_name':
        if (this.formGroup.get('last_name').hasError('required')) {
          return 'Last name required';
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
  this.bannerImage = '../../../assets/visu/about.webp'
  this.pageTitle = 'contact us';   
   this.createForm();

  }

  onSubmit(){
    this.service.postContact(this.formGroup.value).subscribe((data : object)=>{
      this.snackBar.open('Thankyou for your details.', '', {
        duration: 3000,
      });    
    });  
    this.formGroup.reset()
  }
}
