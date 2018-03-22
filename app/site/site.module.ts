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


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./language/i18n/', '.json');
}

@NgModule({
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
    )
  ],
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
  ],

})
export class SiteModule { }
