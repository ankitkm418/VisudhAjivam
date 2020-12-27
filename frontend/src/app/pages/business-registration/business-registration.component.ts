
import { MyService } from 'src/app/myService.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-business-registration',
  templateUrl: './business-registration.component.html',
  styleUrls: ['./business-registration.component.css']
})
export class BusinessRegistrationComponent implements OnInit {
  pageTitle: string;
  myData;
  myData1;
  formGroup: FormGroup;
  message: string = 'Our team will get back to you';

  constructor(private service : MyService, 
    private formBuilder: FormBuilder, private snackBar: MatSnackBar) { }

 
  createForm() {
    this.formGroup = this.formBuilder.group({
      'fullName': ['', Validators.required],
      'dob': ['', Validators.required],
      "aadhar" : ['', Validators.required],
      "phone_number" : ['', Validators.required],
      "father" : ['', Validators.required],
      "mother" : ['', Validators.required],
      "sex" : ['', Validators.required],
      "pan" : ['', Validators.required],
      "qualification" : ['', Validators.required],
      "doc" : ['', Validators.required],
      "job" : ['', Validators.required],
      "address" : ['', Validators.required],
      "city" : ['', Validators.required],
      "district" : ['', Validators.required],
      "state" : ['', Validators.required],
      "pin" : ['', Validators.required],
      "country" : ['', Validators.required],
      "email" : ['', Validators.required],
      "password" : ['', Validators.required],
      "password2" : ['', Validators.required],
      "business" : ['', Validators.required],
      "gst" : ['', Validators.required],
      "license" : ['', Validators.required],
      "document" : ['', Validators.required],
      "photo" : ['', Validators.required],
      "official" : ['', Validators.required],
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
        case 'business':
        if (this.formGroup.get('business').hasError('required')) {
          return 'Business required';
        }break;
        case 'license':
        if (this.formGroup.get('license').hasError('required')) {
          return 'License required';
        }break;
        case 'gst':
        if (this.formGroup.get('gst').hasError('required')) {
          return 'GST required';
        }break;
        case 'document':
        if (this.formGroup.get('document').hasError('required')) {
          return 'Document required';
        }break;
        case 'photo':
        if (this.formGroup.get('photo').hasError('required')) {
          return 'Photo required';
        }break;
        case 'official':
        if (this.formGroup.get('official').hasError('required')) {
          return 'Number required';
        }
        break;
        case 'sex':
        if (this.formGroup.get('sex').hasError('required')) {
          return 'Sex required';
        }
        break;
        case 'pan':
        if (this.formGroup.get('pan').hasError('required')) {
          return 'Pan No required';
        }
        break;
        case 'qualification':
        if (this.formGroup.get('qualification').hasError('required')) {
          return 'Qualification required';
        }
        break;
        case 'doc':
        if (this.formGroup.get('doc').hasError('required')) {
          return 'Document required';
        }
        break;
        case 'dob':
        if (this.formGroup.get('dob').hasError('required')) {
          return 'DOB required';
        }

        break;
        case 'job':
        if (this.formGroup.get('job').hasError('required')) {
          return 'Job required';
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
        case 'password2':
        if (this.formGroup.get('password2').hasError('required')) {
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

  this.service.getContact().subscribe(data => this.myData = data);
  this.service.getContDetails().subscribe(data => this.myData1 = data)
  }

  onSubmit(){
    this.service.postBusinessForm(this.formGroup.value).subscribe((data : object)=>{
      this.snackBar.open('Thankyou for your details.', '', {
        duration: 3000,
      });    
    });  
    this.formGroup.reset()
  }
}
