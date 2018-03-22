import {Component , trigger,
    state,
    style,
    transition,
    animate} from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ServerAppService} from './post.service';
import {TranslateService} from '@ngx-translate/core';


@Component({
    selector: 'nav-bar',
    templateUrl: '/template/app.navbar.html',
    providers:[ServerAppService],

    styles:[
        `
  body > .container{
                padding-top: 60px;
            }
`
    ],


})
 
export class NavBarComponent {


    constructor(private language:TranslateService){

    }
    changeLanguage(lang):void{
        this.language.use(lang);
    }
}
