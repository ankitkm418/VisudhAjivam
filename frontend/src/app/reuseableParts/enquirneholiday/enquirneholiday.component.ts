import { MyService } from './../../myService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquirneholiday',
  templateUrl: './enquirneholiday.component.html',
  styleUrls: ['./enquirneholiday.component.css']
})
export class EnquirneholidayComponent implements OnInit {
myData;

  constructor(private service : MyService) { }

  ngOnInit(): void {
    this.service.getEnquiry().subscribe(data =>this.myData = data)
  }

}
