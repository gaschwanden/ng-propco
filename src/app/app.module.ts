import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertComponent } from './_directives/alert/alert.component';
import { ReitComponent } from './app-reit/reit.component';
import { LoginComponent } from './app-login/login.component';
import { RegisterComponent } from './app-register/register.component';
import { AuthGuard } from './_guard/auth.guard';
import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { Routing } from './app.routing';
import { Web3Service } from './_services/_web3/web3.service';
import { EthAddressValidatorDirective } from './_validators/eth-address-validator.directive';
import { AddReitComponent } from './app-add-reit/add-reit.component';
import { AssetComponent } from './app-asset/asset.component';
import { AddAssetComponent } from './app-add-asset/add-asset.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ReitComponent,
    LoginComponent,
    RegisterComponent,
    EthAddressValidatorDirective,
    AddReitComponent,
    AssetComponent,
    AddAssetComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    Routing
  ],
  providers: [
    AuthGuard,
    AlertService,
    Web3Service,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
