import { MyService } from './../../myService.service';
import { Component, OnInit } from '@angular/core';

@Component({
      selector : 'app-terms',
      templateUrl : './terms.component.html'
})

export class TermsComponent implements OnInit{
      bannerImage: any;
      myData;
    constructor(private service : MyService){}
      ngOnInit(): void {
        this.bannerImage = '../../../assets/images/aboutpage/about-banner-bg-small.jpg';
        
        this.service.getTerms().subscribe(data =>this.myData = data)
      }
    
}