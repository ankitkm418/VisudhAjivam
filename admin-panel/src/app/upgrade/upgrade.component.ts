import { Component, OnInit } from '@angular/core';
import { MyService } from 'app/myService.service';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {
  myData;

  constructor(private service : MyService) { }
 
  ngOnInit() {
    this.service.getAllEmployees().subscribe(res =>{
      console.log(res)
      this.myData = res
    })
  }

}
