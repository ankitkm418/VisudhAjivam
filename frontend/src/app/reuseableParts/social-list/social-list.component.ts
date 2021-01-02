import { MyService } from './../../myService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-list',
  templateUrl: './social-list.component.html',
  styleUrls: ['./social-list.component.css']
})
export class SocialListComponent implements OnInit {
  myData;
  constructor(private service : MyService) { }

  ngOnInit(): void {
  }

}
