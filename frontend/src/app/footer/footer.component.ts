import { MyService } from 'src/app/myService.service';
import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
myData;
  constructor(private service : MyService) { }

  liveYear: number = new Date().getFullYear();

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  ngOnInit(): void {
    this.service.getFooter().subscribe(data => this.myData = data)
  }

}
