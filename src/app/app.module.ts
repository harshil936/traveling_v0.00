import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { ImagesPanComponent } from './body/images-pan/images-pan.component';
import { GoogleMapsComponent } from './body/google-maps/google-maps.component';
import { ToServerUrlService } from 'src/app/core/services/toServer.url.service'
import { HttpClientModule } from '@angular/common/http';
import { DataCallService } from './core/services/data-call.service';
import {HttpService} from './core/services/http.service';
import {HttpInterceptorService} from 'ng-http-interceptor';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {routing} from './travelapp.routes';
import { AccountsPageComponent } from './accounts-page/accounts-page.component';
import { SignUpComponentComponent } from './accounts-page/sign-up-component/sign-up-component.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDn4jqzL9yIoLdGSO_nPNRwCd4XJkQurUI'
    }),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    ImagesPanComponent,
    GoogleMapsComponent,
    AccountsPageComponent,
    SignUpComponentComponent,

  ],
  providers: [
    ToServerUrlService,
    DataCallService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
