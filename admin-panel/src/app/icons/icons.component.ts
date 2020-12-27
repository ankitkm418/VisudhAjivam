import { Component, OnInit } from '@angular/core';
import { MyService } from 'app/myService.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  myData;

  constructor(private service : MyService) { }
 
  ngOnInit() {
    this.service.getAllBusiness().subscribe(res =>{
      console.log(res)
      this.myData = res
    })
  }


}
