import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharetripsPopupComponent } from '../sharetrips-popup/sharetrips-popup.component';
import { DetailquotePopupComponent } from '../detailquote-popup/detailquote-popup.component';

@Component({
  selector: 'app-mytrips-popup',
  templateUrl: './mytrips-popup.component.html',
  styleUrls: ['./mytrips-popup.component.css']
})
export class MytripsPopupComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(SharetripsPopupComponent, {
      width: '800px',
    });
  }

  openDialogDetailQuote() {
    this.dialog.open(DetailquotePopupComponent, {
      width: '800px',
    });
  }

  ngOnInit(): void {
  }

}
