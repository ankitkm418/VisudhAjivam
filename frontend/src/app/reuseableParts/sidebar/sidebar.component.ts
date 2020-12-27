import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MyService } from './../../myService.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  routerString: string;
  myData;
  myData1;
  constructor(private service : MyService, private router : Router, private _router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.routerString = _router.url;
  }

  colorFavourite:string = '';
  colorRequest:string = '';
  colorShare:string = '';
  
  changeStyleFavourite($event){
    this.colorFavourite = $event.type == 'mouseover' ? 'hoverActive' : '';
  }
  changeStyleRequest($event){
    this.colorRequest = $event.type == 'mouseover' ? 'hoverActive' : '';
  }
  changeStyleShare($event){
    this.colorShare = $event.type == 'mouseover' ? 'hoverActive' : '';
  }

  ngOnInit(): void {

    this.service.getCatPost().subscribe(data =>this.myData1 = data)
    this.service.getRecentPost().subscribe(data =>this.myData = data)

  }

}
