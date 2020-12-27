import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FilterPopupComponent } from 'src/app/dialogs/filter-popup/filter-popup.component';
import { Router } from '@angular/router';

interface Location {
  value: string;
  viewValue: string;
}
interface Adult {
  value: string;
  viewValue: string;
}
interface Children {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-vertical-form-filter',
  templateUrl: './vertical-form-filter.component.html',
  styleUrls: ['./vertical-form-filter.component.css']
})
export class VerticalFormFilterComponent implements OnInit {
  router: string;

  constructor(
    public dialog: MatDialog,
    private _router: Router,
  ) {
    this.router = _router.url;
  }

  openDialog() {
    this.dialog.open(FilterPopupComponent, {
      width: '800px',
    });
  }

  Locations: Location[] = [
    {value: 'australia-0', viewValue: 'Australia'},
    {value: 'newzealand-1', viewValue: 'New Zealand'},
  ];

  Adults: Adult[] = [
    {value: 'Adult1-0', viewValue: 'Adult: 1'},
    {value: 'Adult2-1', viewValue: 'Adult: 2'},
  ];

  Childrens: Children[] = [
    {value: 'Children0-0', viewValue: 'Children: 0'},
    {value: 'Children1-1', viewValue: 'Children: 1'},
  ];

  ngOnInit(): void {
  }

}