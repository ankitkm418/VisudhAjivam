import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-our-locations',
  templateUrl: './our-locations.component.html',
  styleUrls: ['./our-locations.component.css']
})
export class OurLocationsComponent implements OnInit {

  constructor() { }

  @Input() image: string;
  @Input() title: string;

  ngOnInit(): void {
  }

}
