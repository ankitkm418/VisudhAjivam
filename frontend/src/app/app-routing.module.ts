import { BusinessRegistrationComponent } from './pages/business-registration/business-registration.component';
import { EmpRegistrationComponent } from './pages/emp-registration/emp-registration.component';
import { EmpLoginComponent } from './pages/emp-login/emp-login.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { BusinessLoginComponent } from './pages/business-login/business-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ConsumerSignupComponent } from './pages/consumer-signup/consumer-signup.component';
import { UniqueCardComponent } from './header/card.component';


const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
  },
  { 
    path: 'about', 
    component: AboutComponent,
  },
  { 
    path: 'unique-card', 
    component: UniqueCardComponent,
  },
  
  { 
    path: 'book-tests', 
    component: NotfoundComponent 
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path:'consumer-registration',
    component : ConsumerSignupComponent
  },
  {
    path:'emp-registration',
    component : EmpRegistrationComponent
  },
  {
    path:'business-registration',
    component : BusinessRegistrationComponent
  },
  {
    path : 'contact-us',
    component : ContactUsComponent
  },
  { 
    path: 'visit-doctor', 
    component: NotfoundComponent 
  },
  { 
    path: 'business-login', 
    component: BusinessLoginComponent 
  },
  { 
    path: 'admin-login', 
    component: AdminLoginComponent 
  },
  { 
    path: 'emp-login', 
    component: EmpLoginComponent 
  },
  { 
    path: '**',
    component: NotfoundComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
