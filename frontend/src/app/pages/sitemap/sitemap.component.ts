import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  url : string,
  modified : string,
  frequency : string,
  priority : string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {url: 'http://192.168.25.72:4200/#/sitemap', modified: '2020-09-09T13:03Z', frequency: 'daily', priority: '1.0'},
  {url: 'http://192.168.25.72:4200/#/dashboard', modified: '2019-12-06T09:18Z', frequency: 'monthly', priority: '0.9'},
  {url: 'http://192.168.25.72:4200/#/sitemap', modified: '2020-04-08T12:44Z', frequency: 'yearly', priority: '0.5'},
  {url: 'http://192.168.25.72:4200/#/sitemap', modified: '2020-09-09T13:03Z', frequency: 'daily', priority: '1.0'},
  {url: 'http://192.168.25.72:4200/#/sitemap', modified: '2019-12-06T09:18Z', frequency: 'monthly', priority: '0.9'},
  {url: 'http://192.168.25.72:4200/#/sitemap', modified: '2020-04-08T12:44Z', frequency: 'yearly', priority: '0.5'}, {url: 'http://192.168.25.72:4200/#/sitemap', modified: '2020-09-09T13:03Z', frequency: 'daily', priority: '1.0'},
  {url: 'http://192.168.25.72:4200/#/sitemap', modified: '2019-12-06T09:18Z', frequency: 'monthly', priority: '0.9'},
  {url: 'http://192.168.25.72:4200/#/sitemap', modified: '2020-04-08T12:44Z', frequency: 'yearly', priority: '0.5'}, {url: 'http://192.168.25.72:4200/#/sitemap', modified: '2020-09-09T13:03Z', frequency: 'daily', priority: '1.0'},
  {url: 'http://192.168.25.72:4200/#/sitemap', modified: '2019-12-06T09:18Z', frequency: 'monthly', priority: '0.9'},
  {url: 'http://192.168.25.72:4200/#/sitemap', modified: '2020-04-08T12:44Z', frequency: 'yearly', priority: '0.5'}, {url: 'http://192.168.25.72:4200/#/sitemap', modified: '2020-09-09T13:03Z', frequency: 'daily', priority: '1.0'},
  {url: 'http://192.168.25.72:4200/#/sitemap', modified: '2019-12-06T09:18Z', frequency: 'monthly', priority: '0.9'},
  {url: 'http://192.168.25.72:4200/#/sitemap', modified: '2020-04-08T12:44Z', frequency: 'yearly', priority: '0.5'}, {url: 'http://192.168.25.72:4200/#/sitemap', modified: '2020-09-09T13:03Z', frequency: 'daily', priority: '1.0'},
  {url: 'http://192.168.25.72:4200/#/sitemap', modified: '2019-12-06T09:18Z', frequency: 'monthly', priority: '0.9'},
  {url: 'http://192.168.25.72:4200/#/sitemap', modified: '2020-04-08T12:44Z', frequency: 'yearly', priority: '0.5'}, {url: 'http://192.168.25.72:4200/#/sitemap', modified: '2020-09-09T13:03Z', frequency: 'daily', priority: '1.0'},
  {url: 'http://192.168.25.72:4200/#/sitemap', modified: '2019-12-06T09:18Z', frequency: 'monthly', priority: '0.9'},
  {url: 'http://192.168.25.72:4200/#/sitemap', modified: '2020-04-08T12:44Z', frequency: 'yearly', priority: '0.5'},
];

/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styles : [`table {width: 100%}
  th.mat-sort-header-sorted { color: black;}`]
})
export class SitemapComponent implements AfterViewInit,OnInit {
  displayedColumns: string[] = ['url', 'modified', 'frequency', 'priority'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  title="Sitemap"
  bannerImage: any;

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  ngOnInit(){
    this.bannerImage = '../../../assets/images/aboutpage/about-banner-bg-small.jpg';    
  }
}

