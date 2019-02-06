import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './modules/app-routing.module';

import { MaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SkueproveTermSearchComponent } from './skueprove-term-search/skueprove-term-search.component';

import { LoaderInterceptorService } from './services/loader-interceptor.service';
import { VismaService} from './services/visma.service';
import { SharepointService } from './services/sharepoint.service';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './services/loader.service';
import { SkueproveSearchResultComponent } from './skueprove-search-result/skueprove-search-result.component';
import { SkueproveEditComponent } from './skueprove-edit/skueprove-edit.component';
import { CookieService } from 'ngx-cookie-service';
import { NumericKeypadComponent } from './numeric-keypad/numeric-keypad.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoaderComponent,
    SkueproveTermSearchComponent,
    SkueproveSearchResultComponent,
    SkueproveEditComponent,
    NumericKeypadComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,    
    MaterialModule
  ],
  exports: [
    LoaderComponent
  ],
  providers: [
    Location, { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    },
    CookieService,
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
