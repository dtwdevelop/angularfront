/**
 * Created by hider on 14/02/2017.
 */import {Component , trigger,
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
    selector: 'services',
    templateUrl: '/template/app.services.html',
    providers:[ServerAppService],

    styles:[
        ``
    ],
    animations: [
        trigger('Content', [
            state('inactive', style({transform: 'translateX(0) scale(1)'})),
            state('active',   style({transform: 'translateX(0) scale(1.1)'})),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out')),
            transition('void => inactive', [
                style({transform: 'translateX(-100%) scale(1)'}),
                animate(100)
            ]),
            transition('inactive => void', [
                animate(100, style({transform: 'translateX(100%) scale(1)'}))
            ]),
            transition('void => active', [
                style({transform: 'translateX(0) scale(0)'}),
                animate(200)
            ]),
            transition('active => void', [
                animate(200, style({transform: 'translateX(0) scale(0)'}))
            ])
        ])
    ]



})
export class ServicesComponent {

    public active="active";
    public services =[
   {
       title:"Programming",
       description:"Php ,Python , Javascript, ActionScript programming",
       image: "/images/services/programming.jpg"

   },{
    title:"Design and animation",
    description:"Creating a banner and animation. Visiting card design",
            image: "/images/services/web-disign.png"
  },


    ];
    constructor(server:ServerAppService){
        // server.load().subscribe(
        //     (d)=> console.log(d)
        //
        // );
    }
}


