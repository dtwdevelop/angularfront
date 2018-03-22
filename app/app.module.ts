import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {LanguageProvider} from './app.servicelanguage'
import {HttpClientModule,HttpClient} from '@angular/common/http';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
//import {AdminModule} from "./admin/admin.module";
import {SiteModule} from "./site/site.module";
//import { CoreModule } from './@core/core.module';
//import { ThemeModule } from './@theme/theme.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




// import {BusyModule} from 'angular2-busy';
// import {Ng2PageScrollModule} from 'ng2-page-scroll';
//import 'rxjs/Rx';
// AoT requires an exported function for factories
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CommonModule,
    HttpClientModule,
    // NgbModule.forRoot(),
    // ThemeModule.forRoot(),
    // CoreModule.forRoot(),
   // AdminModule,
    SiteModule,
    routing,

  ],
  providers: [
      //{ provide: LOCALE_ID, useValue: 'ru' },
    HttpClient,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {
  LocationStrategy,
  HashLocationStrategy,
}
from '@angular/common';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    ROUTER_DIRECTIVES,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
*/
