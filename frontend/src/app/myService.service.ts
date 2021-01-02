import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface User {
  email: string;
  password: string
}

@Injectable({
  providedIn: "root"
})


export class MyService {
  constructor(private http: HttpClient, private router: Router) { }

  baseUrl = "http://luxuryholidays.visionsdemo.com/admin/api";
  baseUri = "http://localhost:3000/api";


  postConsumerForm(obj) {
    return this.http.post(`${this.baseUri}/register`, obj)
  }

  loginForm(user) {
    return this.http.post<any>(`${this.baseUri}/login`, user)
  }

  uniqueCard(id) {
    return this.http.get(`${this.baseUri}/${id}`)
  }

  getAccessToken() {
    if (localStorage.getItem('email') == undefined && null) {
      alert('Please provide correct username and password')
    } else
      return localStorage.getItem('email');
  }

  logout() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('email')
    localStorage.removeItem('id')
  }

  //---------------------------Business-----------------------------------
  postBusinessForm(obj) {
    return this.http.post(`${this.baseUri}/b-register`, obj)
  }

  bLogin(user: User) {
    return this.http.post<any>(`${this.baseUri}/b-login`, user)
  }
  bUniqueCard(id) {
    return this.http.get(`${this.baseUri}/business/${id}`)
  }

  bLogout() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('email')
    localStorage.removeItem('id')
  }
  ////////////////////////////Emp-----------------
  postEmployeeForm(obj) {
    return this.http.post(`${this.baseUri}/e-register`, obj)
  }
  eUniqueCard(id) {
    return this.http.get(`${this.baseUri}/emp/${id}`)
  }
  eLogin(user: User) {
    return this.http.post<any>(`${this.baseUri}/e-login`, user)
  }

  eLogout() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('email')
    localStorage.removeItem('id')
  }
  postContact(obj) {
    return this.http.post(`${this.baseUri}/contact`, obj)
  }
}


