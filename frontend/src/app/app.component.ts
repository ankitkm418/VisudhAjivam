import { Component } from '@angular/core';
import { MyService } from 'src/app/myService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  // constructor(private spinner: NgxSpinnerService){}
  // ngOnInit() {
  //   this.spinner.show();
 
  //   setTimeout(() => {
  //     this.spinner.hide();
  //   }, 5000);
  // }
  constructor(public service : MyService) {}
}
