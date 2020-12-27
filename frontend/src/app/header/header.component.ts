import { MyService } from 'src/app/myService.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MytripsPopupComponent } from '../dialogs/mytrips-popup/mytrips-popup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myData;
  loginData;
  constructor(public dialog: MatDialog, private service : MyService) {}

  openDialog() {
    this.dialog.open(MytripsPopupComponent, {
      width: '800px',
    });
  }


  status1: boolean = false;
  toggleMobileMenu(){
      this.status1 = !this.status1;       
  }
  subMenu1: boolean = false;
  toggleSubMenu1(){       
      if (this.screenWidth < 993) 
        {
            this.subMenu1 = !this.subMenu1; 
        }     
  }
  subMenu2: boolean = false;
  toggleSubMenu2(){       
      if (this.screenWidth < 993) 
        {
            this.subMenu2 = !this.subMenu2; 
        }     
  }

  
  public screenWidth: any;  

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  
    this.service.getContDetails().subscribe(data =>this.myData = data)

    this.loginData = this.service.getAccessToken()
   
  }

  logout(){
   this.service.logout().subscribe(res=>{
    console.log(res)
    alert('Successfully Logout')
   })
  }



  
}
