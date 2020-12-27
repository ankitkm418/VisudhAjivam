import { MyService } from 'src/app/myService.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup-newsletter',
  templateUrl: './signup-newsletter.component.html',
  styleUrls: ['./signup-newsletter.component.css']
})
export class SignupNewsletterComponent implements OnInit {
myData;
formGroup: FormGroup;
  constructor(private service : MyService,private snackBar: MatSnackBar, private formBuilder : FormBuilder) {}
  
  createForm() {
    this.formGroup = this.formBuilder.group({
      'email': ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.service.getNewsLetter().subscribe(data =>this.myData = data);

    this.createForm();
  }
  onSubmit(formGroup){
  if(formGroup.valid){
    this.service.postNewsLetter(this.formGroup.value).subscribe(data =>{
      this.snackBar.open('Thankyou for your details.','', {
        duration: 3000,
      });  
    })
    this.formGroup.reset();
  } else{
    alert('Please enter your email to submit')}
  }
    

}
