import { Component, OnInit, ViewChild } from '@angular/core';
import { Options } from 'ng5-slider';
import { MatAccordion } from '@angular/material/expansion';

interface Sorting {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-filter-popup',
  templateUrl: './filter-popup.component.html',
  styleUrls: ['./filter-popup.component.css']
})
export class FilterPopupComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  
  minValue: number = 1;
  maxValue: number = 6;
  options: Options = {
    floor: 1,
    ceil: 6,
    step: 1,
    noSwitching: true,
  };

  minValue2: number = 2;
  maxValue2: number = 17;
  options2: Options = {
    floor: 2,
    ceil: 17,
    step: 1,
    noSwitching: true,
  };

  constructor() { }

  Sortings: Sorting[] = [
    {value: 'sortbyNameAtoZ-0', viewValue: ' Sort by: Name - a to z '},
    {value: 'sortbyNameZtoA-1', viewValue: ' Sort by: Name - z to a '},
    {value: 'sortbyPriceLtoH-2', viewValue: ' Sort by: Price - low to high (dates required) '},
    {value: 'sortbyPriceHtoL-3', viewValue: ' Sort by: Price - high to low (dates required) '},
    {value: 'sortbyBedsLtoH-4', viewValue: ' Sort by: Beds - low to high '},
    {value: 'sortbyBedsHtoL-4', viewValue: ' Sort by: Beds - high to low '},
  ];

  ngOnInit(): void {
    
  }

}