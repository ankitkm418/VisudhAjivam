import { Component, OnInit } from '@angular/core';
import { MyService } from 'src/app/myService.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  myData;

  constructor(private service : MyService) { }

  bannerImage: any;
  pageTitle: string;

  ngOnInit(): void {
    this.bannerImage = '../../../assets/visu/about.webp'; 
    this.pageTitle = 'About'; 
    
    }

  

}
