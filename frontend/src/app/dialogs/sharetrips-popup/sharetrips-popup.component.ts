import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MytripsPopupComponent } from '../mytrips-popup/mytrips-popup.component';

@Component({
  selector: 'app-sharetrips-popup',
  templateUrl: './sharetrips-popup.component.html',
  styleUrls: ['./sharetrips-popup.component.css']
})
export class SharetripsPopupComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(MytripsPopupComponent, {
      width: '800px',
    });
  }

  ngOnInit(): void {
  }

}
