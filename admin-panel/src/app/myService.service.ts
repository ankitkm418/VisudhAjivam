import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface User{
  email: string;
  password : string
}

@Injectable({
  providedIn: "root"
})


export class MyService{
    constructor(private http: HttpClient, private router : Router) {}
    
    baseUri = "http://localhost:3000/api";
  

    postConsumerForm(obj){
      console.log(obj)
      return this.http.post(`${this.baseUri}/register`, obj)
    }

    loginForm(user: User) {
      console.log('Service', user)
      return this.http.post<any>(`${this.baseUri}/login`, user)
        .subscribe((res: any) => {
          console.log('Api res ==', res)
          // localStorage.setItem('access_token', res.token)
          localStorage.setItem('email', res.email)
          localStorage.setItem('access_token', res.token)
        })
    }
  
    getAccessToken() {
      return localStorage.getItem('access_token');

    }
  
    get isLoggedIn(): boolean {
      let authToken = localStorage.getItem('access_token');
      return (authToken !== null) ? true : false;
    }
  
    logout() {
      if (localStorage.removeItem('access_token') == null)
      {
        console.log('Logout access token Data')
      } if (localStorage.removeItem('email') == null){
        console.log('Logout email Data')
      }
      return this.http.get(`${this.baseUri}/logout`)
    }

    profile(){
      return this.http.get(`${this.baseUri}/consumer-profile`)
    }
    
    getAllConsumer(){
      return this.http.get(`${this.baseUri}/getAll`)
    }
    getAllContact(){
      return this.http.get(`${this.baseUri}/contact`)
    }
    getAllBusiness(){
      return this.http.get(`${this.baseUri}/b-getAll`)
    }
    getAllEmployees(){
      return this.http.get(`${this.baseUri}/e-getAll`)
    }    
  }


