import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SiteComponent}  from "./site.component";
import {CommentsComponent} from './app.comments';
import {PostComponent} from './app.post';
import {routing} from './app.routing';
import {NavBarComponent} from './app.navbar';
import {WelcomeComponent} from "./app.welcome";
import {DetailComponent} from "./app.detail";
import {ContactComponent} from './app.contact';
import {ServicesComponent} from "./app.services";
import {GalleryComponent} from "./app.gallery";
import {PortfolioComponent} from "./app.portfolio";
import {Filter,  OrderBy} from "./app.filter";
import {FormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { NgStickyDirective } from 'ng-sticky';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { ParticlesModule } from 'angular-particle';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from './app.confirm';




export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./language/i18n/', '.json');
}

@NgModule({
  declarations: [
    SiteComponent,
    CommentsComponent,
    PostComponent,
    NavBarComponent,
    WelcomeComponent,
    DetailComponent,
    ContactComponent,
    ServicesComponent,
    GalleryComponent,
    PortfolioComponent,
    Filter,
    OrderBy,
    NgStickyDirective,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
      FormsModule,
      routing,
    //NgbModule.forRoot(),
    //Ng2PageScrollModule,
    TranslateModule.forRoot(
        {
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }
    ),
    ScrollToModule.forRoot(),
    SlideMenuModule,
    Ng2AutoCompleteModule,
    ParticlesModule,
    BootstrapModalModule
  ],

  entryComponents: [
    ConfirmComponent
  ],

})
export class SiteModule { }
