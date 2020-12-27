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
    
    baseUrl = "http://luxuryholidays.visionsdemo.com/admin/api";
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
      return localStorage.getItem('email');
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

    //Business
    postBusinessForm(obj){
      console.log(obj)
      return this.http.post(`${this.baseUri}/b-register`, obj)
    }

    bLogin(user: User) {
      console.log('Service', user)
      return this.http.post<any>(`${this.baseUri}/b-login`, user)
        .subscribe((res: any) => {
          // console.log('Api res ==', res)
          // localStorage.setItem('access_token', res.token)
          localStorage.setItem('email', res.email)
          localStorage.setItem('access_token', res.token)

        })
    }
    
    get bisLoggedIn(): boolean {
      let authToken = localStorage.getItem('access_token');
      return (authToken !== null) ? true : false;
    }
  
    bLogout() {
      if (localStorage.removeItem('access_token') == null)
      {
        console.log('Logout access token Data')
      } if (localStorage.removeItem('email') == null){
        console.log('Logout email Data')
      }
      return this.http.get(`${this.baseUri}/b-logout`)
    }
////////////////////////////Emp-----------------
postEmployeeForm(obj){
  console.log(obj)
  return this.http.post(`${this.baseUri}/e-register`, obj)
}

eLogin(user: User) {
  console.log('Service', user)
  return this.http.post<any>(`${this.baseUri}/e-login`, user)
    .subscribe((res: any) => {
      // console.log('Api res ==', res)
      // localStorage.setItem('access_token', res.token)
      localStorage.setItem('email', res.email)
      localStorage.setItem('access_token', res.token)

    })
}

get eisLoggedIn(): boolean {
  let authToken = localStorage.getItem('access_token');
  return (authToken !== null) ? true : false;
}

eLogout() {
  if (localStorage.removeItem('access_token') == null)
  {
    console.log('Logout access token Data')
  } if (localStorage.removeItem('email') == null){
    console.log('Logout email Data')
  }
  return this.http.get(`${this.baseUri}/e-logout`)
}
  
     postContact(obj){
       return this.http.post(`${this.baseUri}/contact`, obj)
     }
     getContact(){
      return this.http.get(`${this.baseUrl}/contactus`)
    }
     getHomepage(){
      return this.http.get(`${this.baseUrl}/home`)
    }
    getAbout(){
      return this.http.get(`${this.baseUrl}/about`)
    }
    getTestimonials(){
      return this.http.get(`${this.baseUrl}/testimonials`)
    }
    getBlog(){
      return this.http.get(`${this.baseUrl}/blog`)
    }
    getBlogById(id: any) {
      return this.http.get(`${this.baseUrl}/blog_detail/${id}`)
    }
    postNewsLetter(obj){
     return this.http.post(`${this.baseUrl}/newsletter_email`, obj)
    }
    getNewsLetter(){
      return this.http.get(`${this.baseUrl}/newsletter`)
    }
    getFooter(){
      return this.http.get(`${this.baseUrl}/footer`)
    }
    getPolicy(){
      return this.http.get(`${this.baseUrl}/privacy_policy`)
    }
    getTerms(){
      return this.http.get(`${this.baseUrl}/terms_conditions`)
    }
    getContDetails(){
    return this.http.get(`${this.baseUrl}/contact_info`)
    }
    getRecentPost(){
      return this.http.get(`${this.baseUrl}/recent_posts`)
    }
    getHamiltonIsland(){
      return this.http.get(`${this.baseUrl}/hamilton`)
    }
    getEnquiry(){
      return this.http.get(`${this.baseUrl}/enquiry`)
    }
    getCatPost(){
      return this.http.get(`${this.baseUrl}/cat_posts`)
    }
    getBlogCatId(id: any) {
      return this.http.get(`${this.baseUrl}/catblogs/${id}`)
    }
  }


