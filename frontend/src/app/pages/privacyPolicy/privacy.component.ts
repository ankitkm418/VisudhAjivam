import { MyService } from './../../myService.service';
import { Component } from "@angular/core";

@Component({
      selector : 'app-privacy',
      templateUrl : './privacy.component.html'
})
export class PrivacyComponent{
myData;
title="Privacy & Policy"
bannerImage: any;    
pageTitle: string;
    
constructor(private service : MyService){}

ngOnInit(): void {
this.bannerImage = '../../../assets/images/aboutpage/about-banner-bg-small.jpg';    

this.service.getPolicy().subscribe(data =>this.myData = data)
}
    
}