import { Component, OnInit } from '@angular/core';
import {MyService} from '../myService.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  myData;

  constructor(private service : MyService) { }
 
  ngOnInit() {
    this.service.getAllConsumer().subscribe(res =>{
      console.log(res)
      this.myData = res
    })
  }

}
