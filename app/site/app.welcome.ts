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

@Component({
    selector: 'welcome',
    templateUrl: '/template/app.welcome.html',
    providers:[ServerAppService],
    styles:[
        ``
    ],

    animations: [
        trigger('Content', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
                style({transform: 'translateX(-100%)'}),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({transform: 'translateX(100%)'}))
            ])
        ])
    ]
      
 })
export class WelcomeComponent {
    public active ="active";
    constructor(){

    }

}
