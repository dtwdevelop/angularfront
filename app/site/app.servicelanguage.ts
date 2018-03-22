import {Injectable,Inject,LOCALE_ID,TRANSLATIONS,TRANSLATIONS_FORMAT} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {DOCUMENT} from '@angular/platform-browser';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

 @Injectable()
export class LanguageProvider {
    protected language:string;

    public constructor(){

    }

    public static setLanguage(language:any):any {
        let data=[];
        language =language
         Observable.create(function(observer){
             window.localStorage.setItem("lang",language)
             let lang =  LanguageProvider.getLanguage();
             let trans = LanguageProvider.LoadFile(language);
             observer.next([{ provide: LOCALE_ID, useValue: lang }, {provide: TRANSLATIONS, useValue: trans}])
             observer.complete()
        }).subscribe((res)=>{
            data = res

        });
        console.log(data)
       return data;

    }



    public static getLanguage(){
        let language =window.localStorage.getItem('lang')
       if(language !== null){
            return language
       }
    }


    private static LoadFile(lang){
        // use the require method provided by webpack

      // we use the webpack raw-loader to return the content as a string
        let translations = require(`raw-loader!./locale/messages.`+lang+`.xlf`);
        return translations

    }

}
