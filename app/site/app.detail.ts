/**
 * Created by hider on 14/02/2017.
 */
import {Component,Input, Output, trigger, state, style, transition, animate} from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ServerAppService} from './post.service';
import {ActivatedRoute} from '@angular/router';


@Component({
    selector: 'detail',
    templateUrl: '/template/app.detail.html',

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

export class DetailComponent {

    @Input() dvalue;
    public  id:string;
    public pactive ="active";

     public model ={
         id:1,
         title:"Title view detail",
         post :"Post detail"
     }

      @Input() status;

    constructor(private server:ServerAppService,private active:ActivatedRoute){

        this.active.params.subscribe(
           (param:any)=> {
               this.id = param['id']
               this.status = false
               if(param['id'] != null){
                   this.dvalue   = this.model
                   this.getPost(param['id'])
               }


           }

       );

    }

    public  getPost(id:string){
        this.server.postView(this.id).subscribe(
            (d)=>this.dvalue =d
        );
    }

}


