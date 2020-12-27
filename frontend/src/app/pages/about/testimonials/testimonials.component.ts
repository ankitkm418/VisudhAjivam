import { MyService } from 'src/app/myService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor(private service : MyService) { }

  pageTitle: string;  
  myData;
  p:number = 1;


  ngOnInit(): void {
    this.pageTitle = 'Testimonials'; 

    this.service.getTestimonials().subscribe(data=>{
      this.myData = data;
     })
  }

}
