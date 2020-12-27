import { Component, OnInit } from '@angular/core';
import { MyService } from 'src/app/myService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  myData:any;
  
 constructor(private service : MyService){
  this.service.getHomepage().subscribe(data=>{
    this.myData = data;
   })
 }

  accommodations = [];
  slideConfig = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "arrows": true,
    "prevArrow": "<button type='button' class='slick-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    "nextArrow": "<button type='button' class='slick-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    'responsive': [
      {
        'breakpoint': 1399,
        'settings': {
          'slidesToShow': 4
        }
      },
      {
        'breakpoint': 1199,
        'settings': {
          'slidesToShow': 3
        }
      },
      {
        'breakpoint': 991,
        'settings': {
          'slidesToShow': 2
        }
      },
      {
        'breakpoint': 575,
        'settings': {
          'slidesToShow': 1
        }
      }
    ]
  };

  locations = [];
  slideConfig2 = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "arrows": true,
    "prevArrow": "<button type='button' class='slick-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    "nextArrow": "<button type='button' class='slick-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    'responsive': [
      {
        'breakpoint': 1199,
        'settings': {
          'slidesToShow': 3
        }
      },
      {
        'breakpoint': 991,
        'settings': {
          'slidesToShow': 2
        }
      },
      {
        'breakpoint': 575,
        'settings': {
          'slidesToShow': 1
        }
      }
    ]
  };

  ngOnInit(): void {

    this.accommodations = [
      {  
        title: "ABC", 
        image: "../../../assets/visu/services.jpg",
      },
      { 
        title: "DEF", 
        image: "../../../assets/visu/services1.webp", 
      },
      { 
        title: "GHI",
        image: "../../../assets/visu/services2.jpg",  
      },
      { 
        title: "JKL",
        image: "../../../assets/visu/services3.jfif",  
      },
      { 
        title: "MNO", 
        image: "../../../assets/visu/services4.jpg"
      },
      { 
        title: "PQR",
        image: "../../../assets/visu/services5.jfif",  
      },
      { 
        title: "STU",
        image: "../../../assets/visu/services.jpg",  
      },
    ];

    this.locations = [
      {
        title: "Dr. XYZ",
        image: "../../../assets/visu/doctor.jfif",
      },
      {
        title: "Dr. PQR",
        image: "../../../assets/visu/doctor.jfif",
      },
      {
        title: "Dr. MNO",
        image: "../../../assets/visu/doctor.jfif",
      },
      {
        title: "Dr. JKL",
        image: "../../../assets/visu/doctor.jfif",
      },
      {
        title: "Dr. GHI",
        image: "../../../assets/visu/doctor.jfif",
      },
      {
        title: "Dr. DEF",
        image: "../../../assets/visu/doctor.jfif",
      },
      {
        title: "Dr. ABC",
        image: "../../../assets/visu/doctor.jfif",
      },
    ]
  }

}
