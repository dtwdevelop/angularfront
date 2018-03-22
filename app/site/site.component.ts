import {Component,Input,LOCALE_ID, OnInit} from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ServerAppService} from './post.service';
import {LanguageProvider} from './app.servicelanguage'
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'site',
    templateUrl: '/template/app.component.html',
    providers:[ServerAppService],


    styles:[
        `
`
 ],
})
export class SiteComponent implements  OnInit {
    public  datenow  = new Date();
    @Input() slide

    constructor(private translate:TranslateService){

        translate.setDefaultLang('en');
    }

    ngOnInit(){
    }

    closeAlert(alert:any){

    }


}
