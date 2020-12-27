import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accommodation-cards',
  templateUrl: './accommodataion-cards.component.html',
  styleUrls: ['./accommodataion-cards.component.css']
})
export class AccommodataionCardsComponent implements OnInit {

  constructor() { }

  @Input() image: string;
  @Input() title: string;
  
  ngOnInit(): void {
  }

}
