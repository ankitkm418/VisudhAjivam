import { Component, OnInit } from '@angular/core';
import { MyService } from 'app/myService.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  myData;

  constructor(private service : MyService) { }
 
  ngOnInit() {
    this.service.getAllContact().subscribe(res =>{
      console.log(res)
      this.myData = res
    })
  }

}
