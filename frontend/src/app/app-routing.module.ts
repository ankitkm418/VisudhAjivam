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
import { HolidayRentalsComponent } from './pages/holiday-rentals/holiday-rentals.component';
import { ConsumerSignupComponent } from './pages/consumer-signup/consumer-signup.component';


const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
  },
  { 
    path: 'about', 
    component: AboutComponent,
  },
  // { 
  //   path: 'testimonials',
  //   component: TestimonialsComponent,
  // },
  
  { 
    path: 'book-tests', 
    component: NotfoundComponent 
  },
  // {
  //   path : 'blog',
  //   component : BlogListComponent
  // },
  // {
  //   path : 'blog/details/:id',
  //   component : BlogDetailsComponent
  // },
  // {
  //   path : 'blog-categories/:id',
  //   component : BCategoryComponent
  // },
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
  // {
  //   path: 'trip-detail',
  //   component : TripDetailComponent
  // },
  // {
  //   path:'buy-medicines',
  //   component : HamiltonIslandComponent
  // },
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
  // {
  //   path:'split-view',
  //   component : SplitViewComponent
  // },
  // {
  //   path:'map-view',
  //   component : MapViewComponent
  // },
  // {
  //   path:'terms-condition',
  //   component : TermsComponent
  // },
  // {
  //   path:'policies',
  //   component : PrivacyComponent
  // },
  // {
  //   path:'sitemap',
  //   component : SitemapComponent
  // },
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
