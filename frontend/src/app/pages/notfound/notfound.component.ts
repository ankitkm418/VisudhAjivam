import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  title="Page Not Found"

  bannerImage: any;

  pageTitle: string;

  ngOnInit(): void {
    this.bannerImage = '../../../assets/visu/about.webp';    
    this.pageTitle = '404';
  }

}
