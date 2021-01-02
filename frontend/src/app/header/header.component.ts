import { MyService } from 'src/app/myService.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myData;
  loginData;
  
 @Input() loggedIn; 
  
  constructor(public service : MyService, private router : Router) {}


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
   
    //this.service.getContDetails().subscribe(data =>this.myData = data)

   
   
  }

  logout(){
   this.service.logout()
  
   //.subscribe(res=>{
    //console.log(res)
    alert('Successfully Logout')
  
    //window.location.reload();
    this.router.navigate(['/'])
    
   }
  
 


  
}
