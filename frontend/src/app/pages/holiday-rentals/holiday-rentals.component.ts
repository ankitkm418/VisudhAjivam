import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holiday-rentals',
  templateUrl: './holiday-rentals.component.html',
  styleUrls: ['./holiday-rentals.component.css']
})
export class HolidayRentalsComponent implements OnInit {

  constructor() { }

  accommodations = [];

  bannerImage: any;
  pageTitle: string;

  ngOnInit(): void {
    this.bannerImage = '../../../assets/visu/about.webp'; 
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
