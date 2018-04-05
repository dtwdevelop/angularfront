import {Component ,OnInit, trigger, state, style, transition, animate,Inject, ViewChild, ElementRef} from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { DOCUMENT} from '@angular/common';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ServerAppService} from './post.service';
import {TranslateService} from '@ngx-translate/core';
import { ScrollToService } from 'ng2-scroll-to-el';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';


@Component({
    selector: 'nav-bar',
    templateUrl: '/template/app.navbar.html',
    providers:[ServerAppService,PageScrollService],

    styles:[
        `
  body > .container{
                padding-top: 60px;
            }
`
    ],


})
 
export class NavBarComponent {

    collapse: boolean = true;
    myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;
    private menuItemsArray: any[] = [
        {"title": "Home", "link": "/"},
        {"title": "Service", "link": "/services"},
        {
            "title": "Portfolio", "link": "/portfolio",

        },
        {
            "title": "Blogs", "link": "/blog",

        },


    ];
    config = {
        closeOnCLick: true
    };
    private status: boolean = false;
    @ViewChild('scrollside')
    private container: ElementRef;

    constructor(private language: TranslateService, private router: Router, private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {

    }

    ngOnInit(){
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };

        this.myParams = {
            particles: {
                number: {
                    value: 200,
                },
                color: {
                    value: '#ff0000'
                },
                shape: {
                    type: 'triangle',
                },
            }
        };
    }

    changeLanguage(lang): void {
        this.language.use(lang);
    }

    public onMenuClose() {


    }

    public onMenuOpen() {

    }

    private onItemSelect(item: any) {
        let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#scrollside');
        this.pageScrollService.start(pageScrollInstance);
        console.log("select")
        this.router.navigate([item.link]);
        this.status = true;

    }

}




