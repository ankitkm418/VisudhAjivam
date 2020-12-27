import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MytripsPopupComponent } from '../mytrips-popup/mytrips-popup.component';

@Component({
  selector: 'app-detailquote-popup',
  templateUrl: './detailquote-popup.component.html',
  styleUrls: ['./detailquote-popup.component.css']
})
export class DetailquotePopupComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialogMyTrips() {
    this.dialog.open(MytripsPopupComponent, {
      width: '800px',
    });
  }


  ngOnInit(): void {
  }

}
