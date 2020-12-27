import { ConsumerSignupComponent } from './pages/consumer-signup/consumer-signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyService } from './myService.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { SocialListComponent } from './reuseableParts/social-list/social-list.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { FormholidayrentalsComponent } from './reuseableParts/formholidayrentals/formholidayrentals.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AccommodataionCardsComponent } from './reuseableParts/accommodataion-cards/accommodataion-cards.component';
import { MatCardModule } from '@angular/material/card';
import { SignupNewsletterComponent } from './reuseableParts/signup-newsletter/signup-newsletter.component';
import { OurLocationsComponent } from './reuseableParts/our-locations/our-locations.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { InnerpagesbannerComponent } from './reuseableParts/innerpagesbanner/innerpagesbanner.component';
import { EnquirneholidayComponent } from './reuseableParts/enquirneholiday/enquirneholiday.component';
import { TestimonialsComponent } from './pages/about/testimonials/testimonials.component';
import { HolidayRentalsComponent } from './pages/holiday-rentals/holiday-rentals.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterPopupComponent } from './dialogs/filter-popup/filter-popup.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { Ng5SliderModule } from 'ng5-slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { LoginComponent } from './pages/login/login.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { SplitViewComponent } from './pages/holiday-rentals/split-view/split-view.component';
import { HolidayRentalsViewComponent } from './reuseableParts/holiday-rentals-view/holiday-rentals-view.component';
import { CardsComponent } from './reuseableParts/cards/cards.component';
import { MapViewComponent } from './pages/holiday-rentals/map-view/map-view.component';
import { VerticalFormFilterComponent } from './reuseableParts/vertical-form-filter/vertical-form-filter.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { TermsComponent } from './pages/termsConditions/terms.component';
import {PrivacyComponent} from './pages/privacyPolicy/privacy.component';
import { SitemapComponent } from './pages/sitemap/sitemap.component';

//------------table----------------------
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import {MatSortModule} from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SidebarComponent } from './reuseableParts/sidebar/sidebar.component';

import { LocationStrategy, PathLocationStrategy } from '@angular/common';


import { MytripsPopupComponent } from './dialogs/mytrips-popup/mytrips-popup.component';
import { SharetripsPopupComponent } from './dialogs/sharetrips-popup/sharetrips-popup.component';
import { DetailquotePopupComponent } from './dialogs/detailquote-popup/detailquote-popup.component';
import { BusinessLoginComponent } from './pages/business-login/business-login.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { EmpLoginComponent } from './pages/emp-login/emp-login.component';
import { EmpRegistrationComponent } from './pages/emp-registration/emp-registration.component';
import { BusinessRegistrationComponent } from './pages/business-registration/business-registration.component';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SocialListComponent,
    HomeComponent,
    AboutComponent,
    NotfoundComponent,
    FormholidayrentalsComponent,
    AccommodataionCardsComponent,
    SignupNewsletterComponent,
    OurLocationsComponent,
    InnerpagesbannerComponent,
    EnquirneholidayComponent,
    TestimonialsComponent,
    HolidayRentalsComponent,
    FilterPopupComponent,
    VerticalFormFilterComponent,
    LoginComponent,
    ContactUsComponent,
    SplitViewComponent,
    HolidayRentalsViewComponent,
    CardsComponent,
    MapViewComponent,
    TermsComponent,
    PrivacyComponent,
    SitemapComponent,
    SidebarComponent,
    MytripsPopupComponent,
    SharetripsPopupComponent,
    DetailquotePopupComponent,
    ConsumerSignupComponent,
    BusinessLoginComponent,
    AdminLoginComponent,
    EmpLoginComponent,
    EmpRegistrationComponent,
    BusinessRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    SlickCarouselModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSliderModule,
    Ng5SliderModule,
    MatExpansionModule,
    MatGridListModule,
    HttpClientModule,
    NgxPaginationModule,
    MatTableModule,
    CdkTableModule,
    MatSortModule,
    MatSnackBarModule,
    MatMenuModule
 ],
  providers: [ MyService, {provide: LocationStrategy, useClass: PathLocationStrategy} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
