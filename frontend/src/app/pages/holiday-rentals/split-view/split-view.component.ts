import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-split-view',
  templateUrl: './split-view.component.html',
  styleUrls: ['./split-view.component.css']
})
export class SplitViewComponent implements OnInit {

  constructor() { }
  accommodations = [];

  bannerImage: any;
  pageTitle: string;

  ngOnInit(): void {
    this.bannerImage = '../../../assets/images/aboutpage/about-banner-bg-small.jpg'; 
    this.pageTitle = 'Holiday Rentals';   
    this.accommodations = [
      {  
        title: "Casa Albero Via Roma", 
        image: "../../../assets/images/homepage/accommodate-img-1.jpg",
      },
      { 
        title: "Oasis 1 on Hamilton Island", 
        image: "../../../assets/images/homepage/accommodate-img-2.jpg", 
      },
      { 
        title: "Vue Luxury House Pool 2 Buggies",
        image: "../../../assets/images/homepage/accommodate-img-3.jpg",  
      },
      { 
        title: "Villa 12 The Edge On Hamilton",
        image: "../../../assets/images/homepage/accommodate-img-4.jpg",  
      },
      { 
        title: "The Blue Marlin Yacht Club Villa", 
        image: "../../../assets/images/homepage/accommodate-img-5.jpg", 
      }
    ]; 
  }
 
}
