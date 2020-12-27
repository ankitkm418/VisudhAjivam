import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-innerpagesbanner',
  templateUrl: './innerpagesbanner.component.html',
  styleUrls: ['./innerpagesbanner.component.css']
})
export class InnerpagesbannerComponent implements OnInit {

  constructor() { }

  @Input() innerBannerImage: any;
  @Input() pageTitle: string;

  ngOnInit(): void {
  }

}
