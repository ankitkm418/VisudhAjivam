import { MyService } from '../myService.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
   selector : 'app-unique',
   template : `
   <div class="container">
   <img src="../../assets/visu/card.JPG" class="rounded mx-auto d-block" style="width:35%">
  <div class="top-left">
  <h2 class="top"><b> {{User}} </b></h2>
   <b> {{myData?._id}}</b>
  </div>
  <div class="top-right">
  <b>{{myData?.fullName}}</b>
  </div>
  <div class="top-center">
   <b>{{myData?.dob | date}}</b>
  </div>
  <div class="top-all">
  <b>{{myData?.blood}}</b>
  </div>
  <div class="top-up">
  <b>{{myData?.createdAt|date}}</b>
  </div>
</div>
   
   `,
   styles : [`
   .container {
      position: relative;
      text-align: center;
      color: white;
    }
    .top {
      position: absolute;
      top: -500%;
      left: -41.5%;
      color: black;
      }
   .top-left {
    position: absolute;
    top: 61.5%;
    left: 50.5%;
    color: black;
    }
    .top-right {
      position: absolute;
      top: 57.5%;
      left: 50.5%;
      color: black;
      }
      .top-center {
         position: absolute;
         top: 65.8%;
         left: 50.5%;
         color: black;
         }
         .top-up {
            position: absolute;
            top: 69.5%;
            left: 50.5%;
            color: black;
            }
            .top-all {
               position: absolute;
               top: 73.5%;
               left: 50.5%;
               color: black;
               }
   `]

})
export class UniqueCardComponent{
   id;
   myData;
   date; 
   User;

   constructor(private service : MyService, private route : ActivatedRoute){
      console.log('trial', localStorage.getItem('ref') == 'Consumer' ? true : false)

     this.id = localStorage.getItem('id')
     if(localStorage.getItem('ref') == 'Consumer') {
        this.User = 'Consumer'
      this.service.uniqueCard(this.id).subscribe(res =>{
         this.myData = res
      })
     } if (localStorage.getItem('ref') == 'Business'){
      this.service.bUniqueCard(this.id).subscribe(res =>{
         this.User = 'Business'
         this.myData = res
      })
     } if(localStorage.getItem('ref') == 'Employee'){
      this.service.eUniqueCard(this.id).subscribe(res =>{
         this.User = 'Employee'
         this.myData = res
      })
     }
         
   }

}