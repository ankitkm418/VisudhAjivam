import { Component, OnInit } from '@angular/core';
import { MyService } from 'app/myService.service';

declare const google: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
    myData;

    constructor(private service : MyService) { }
   
    ngOnInit() {
      this.service.getAllEmployees().subscribe(res =>{
        console.log(res)
        this.myData = res
      })
    }

}
